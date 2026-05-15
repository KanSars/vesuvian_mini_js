import { FC } from 'react';
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
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.courseView}>
      <nav className={styles.topNav} aria-label="Основные разделы курса">
        {jsCourseParts.map((part) => (
          <button
            key={part.id}
            type="button"
            className={styles.partButton}
            onClick={() => scrollToSection(part.id)}
          >
            {part.title}
          </button>
        ))}
      </nav>

      <div className={styles.layout}>
        <aside className={styles.sideNav} aria-label="Разделы курса">
          {jsCourseParts.map((part) => (
            <div key={part.id} className={styles.sideNavGroup}>
              <span className={styles.sideNavTitle}>{part.title}</span>
              {part.sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={styles.sectionButton}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          ))}
        </aside>

        <div className={styles.content}>
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
