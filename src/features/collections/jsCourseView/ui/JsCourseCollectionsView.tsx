import { FC, UIEvent, useMemo, useRef, useState } from 'react';
import { Collection } from 'entities/Collection/model/types';
import { CollectionCard } from 'entities/Collection/ui/CollectionCard/CollectionCard';
import { jsCourseParts } from '../model/courseStructure';
import styles from './JsCourseCollectionsView.module.scss';

interface JsCourseCollectionsViewProps {
  onCollectionCardClick: (collection: Collection) => void;
}

export const JsCourseCollectionsView: FC<JsCourseCollectionsViewProps> = ({
  onCollectionCardClick
}) => {
  const initialPartId = jsCourseParts[0]?.id ?? '';
  const initialSectionId = jsCourseParts[0]?.sections[0]?.id ?? '';
  const [activePartId, setActivePartId] = useState(initialPartId);
  const [activeSectionId, setActiveSectionId] = useState(initialSectionId);
  const programmaticScrollTimeoutRef = useRef<number | undefined>(undefined);

  const activePart = useMemo(() => (
    jsCourseParts.find((part) => part.id === activePartId) ?? jsCourseParts[0]
  ), [activePartId]);

  const sectionPartById = useMemo(() => {
    const result = new Map<string, string>();
    jsCourseParts.forEach((part) => {
      part.sections.forEach((section) => {
        result.set(section.id, part.id);
      });
    });

    return result;
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const scrollContainer = document.querySelector('[data-js-course-content]');

    if (!(section instanceof HTMLElement) || !(scrollContainer instanceof HTMLElement)) {
      return;
    }

    const containerTop = scrollContainer.getBoundingClientRect().top;
    const sectionTop = section.getBoundingClientRect().top;

    window.clearTimeout(programmaticScrollTimeoutRef.current);
    programmaticScrollTimeoutRef.current = window.setTimeout(() => {
      programmaticScrollTimeoutRef.current = undefined;
    }, 1200);

    scrollContainer.scrollTo({
      top: scrollContainer.scrollTop + sectionTop - containerTop,
      behavior: 'smooth',
    });
  };

  const onPartButtonClick = (partId: string) => {
    const part = jsCourseParts.find((item) => item.id === partId);

    setActivePartId(partId);
    setActiveSectionId(part?.sections[0]?.id ?? partId);
    scrollToSection(partId);
  };

  const onSectionButtonClick = (sectionId: string) => {
    const partId = sectionPartById.get(sectionId);

    if (partId) {
      setActivePartId(partId);
    }

    setActiveSectionId(sectionId);
    scrollToSection(sectionId);
  };

  const onContentScroll = (event: UIEvent<HTMLDivElement>) => {
    if (programmaticScrollTimeoutRef.current !== undefined) {
      return;
    }

    const scrollContainer = event.currentTarget;
    const containerTop = scrollContainer.getBoundingClientRect().top;
    let currentPart = jsCourseParts[0];

    for (const part of jsCourseParts) {
      const partElement = document.getElementById(part.id);

      if (!partElement) {
        continue;
      }

      const partTop = partElement.getBoundingClientRect().top - containerTop;

      if (partTop <= 80) {
        currentPart = part;
      }
    }

    let currentSectionId = currentPart.sections[0]?.id ?? currentPart.id;

    for (const section of currentPart.sections) {
      const sectionElement = document.getElementById(section.id);

      if (!sectionElement) {
        continue;
      }

      const sectionTop = sectionElement.getBoundingClientRect().top - containerTop;

      if (sectionTop <= 80) {
        currentSectionId = section.id;
      }
    }

    const currentPartId = currentPart.id;

    if (currentPartId && currentPartId !== activePartId) {
      setActivePartId(currentPartId);
    }

    if (currentSectionId !== activeSectionId) {
      setActiveSectionId(currentSectionId);
    }
  };

  return (
    <div className={styles.courseView}>
      <nav className={styles.topNav} aria-label="Основные разделы курса">
        {jsCourseParts.map((part) => (
          <button
            key={part.id}
            type="button"
            className={`${styles.partButton} ${part.id === activePartId ? styles.partButtonActive : ''}`}
            aria-current={part.id === activePartId ? 'true' : undefined}
            onClick={() => onPartButtonClick(part.id)}
          >
            {part.title}
          </button>
        ))}
      </nav>

      <div className={styles.layout}>
        <aside className={styles.sideNav} aria-label="Разделы курса" data-js-course-side-nav>
          <div className={styles.sideNavGroup}>
            <span className={styles.sideNavTitle}>{activePart.title}</span>
            {activePart.sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`${styles.sectionButton} ${section.id === activeSectionId ? styles.sectionButtonActive : ''}`}
                aria-current={section.id === activeSectionId ? 'true' : undefined}
                onClick={() => onSectionButtonClick(section.id)}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.content} data-js-course-content onScroll={onContentScroll}>
          {jsCourseParts.map((part) => (
            <section key={part.id} id={part.id} className={styles.part}>
              <header className={styles.partHeader}>
                <h1 className={styles.partTitle}>{part.title}</h1>
                <p className={styles.partDescription}>{part.description}</p>
              </header>

              {part.sections.map((section) => (
                <section key={section.id} id={section.id} className={styles.section}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <div className={styles.cardsGrid}>
                    {section.lessons.map((lesson) => (
                      <CollectionCard
                        key={lesson.collection_id}
                        collection={lesson}
                        onCollectionCardClick={onCollectionCardClick}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
