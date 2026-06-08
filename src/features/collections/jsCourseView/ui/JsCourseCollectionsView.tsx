import { FC, UIEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Collection } from 'entities/Collection/model/types';
import { CollectionCard } from 'entities/Collection/ui/CollectionCard/CollectionCard';
import { jsCourseParts } from '../model/courseStructure';
import styles from './JsCourseCollectionsView.module.scss';

const JS_COURSE_SCROLL_STATE_KEY = 'js-course-collections-scroll-state';
const MOBILE_SCROLL_QUERY = '(max-width: 900px)';
let savedScrollStateFallback: JsCourseScrollState | null = null;

interface JsCourseScrollState {
  scrollTop: number;
  activePartId: string;
  activeSectionId: string;
}

type CourseNavLane = 'parts' | 'sections';

interface CourseNavScrollState {
  canScrollBack: boolean;
  canScrollForward: boolean;
}

const initialNavScrollState: Record<CourseNavLane, CourseNavScrollState> = {
  parts: {
    canScrollBack: false,
    canScrollForward: false,
  },
  sections: {
    canScrollBack: false,
    canScrollForward: false,
  },
};

const getSessionStorage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.sessionStorage ?? null;
  } catch {
    return null;
  }
};

const getSavedScrollState = (): JsCourseScrollState | null => {
  const sessionStorage = getSessionStorage();

  if (!sessionStorage) {
    return savedScrollStateFallback;
  }

  const savedState = sessionStorage.getItem(JS_COURSE_SCROLL_STATE_KEY);

  if (!savedState) {
    return savedScrollStateFallback;
  }

  try {
    return JSON.parse(savedState) as JsCourseScrollState;
  } catch {
    return savedScrollStateFallback;
  }
};

const setSavedScrollState = (scrollState: JsCourseScrollState) => {
  savedScrollStateFallback = scrollState;
  const sessionStorage = getSessionStorage();

  if (sessionStorage) {
    sessionStorage.setItem(JS_COURSE_SCROLL_STATE_KEY, JSON.stringify(scrollState));
  }
};

const usesDocumentScroll = () => (
  typeof window !== 'undefined' && window.matchMedia(MOBILE_SCROLL_QUERY).matches
);

interface JsCourseCollectionsViewProps {
  onCollectionCardClick: (collection: Collection) => void;
}

export const JsCourseCollectionsView: FC<JsCourseCollectionsViewProps> = ({
  onCollectionCardClick
}) => {
  const initialPartId = jsCourseParts[0]?.id ?? '';
  const initialSectionId = jsCourseParts[0]?.sections[0]?.id ?? '';
  const initialScrollState = getSavedScrollState();
  const [activePartId, setActivePartId] = useState(initialScrollState?.activePartId ?? initialPartId);
  const [activeSectionId, setActiveSectionId] = useState(initialScrollState?.activeSectionId ?? initialSectionId);
  const [navScrollState, setNavScrollState] = useState(initialNavScrollState);
  const topNavRef = useRef<HTMLElement | null>(null);
  const sideNavRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const programmaticScrollTimeoutRef = useRef<number | undefined>(undefined);
  const isLeavingCollectionsRef = useRef(false);

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

  const getNavElement = useCallback((lane: CourseNavLane) => (
    lane === 'parts' ? topNavRef.current : sideNavRef.current
  ), []);

  const updateNavScrollState = useCallback((lane: CourseNavLane) => {
    const navElement = getNavElement(lane);

    if (!navElement) {
      return;
    }

    const maxScrollLeft = navElement.scrollWidth - navElement.clientWidth;
    const nextLaneState = {
      canScrollBack: navElement.scrollLeft > 1,
      canScrollForward: navElement.scrollLeft < maxScrollLeft - 1,
    };

    setNavScrollState((currentState) => {
      const currentLaneState = currentState[lane];

      if (
        currentLaneState.canScrollBack === nextLaneState.canScrollBack &&
        currentLaneState.canScrollForward === nextLaneState.canScrollForward
      ) {
        return currentState;
      }

      return {
        ...currentState,
        [lane]: nextLaneState,
      };
    });
  }, [getNavElement]);

  const updateAllNavScrollState = useCallback(() => {
    updateNavScrollState('parts');
    updateNavScrollState('sections');
  }, [updateNavScrollState]);

  useEffect(() => {
    if (!initialScrollState) {
      return;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      if (usesDocumentScroll()) {
        window.scrollTo(0, initialScrollState.scrollTop);
      } else if (contentRef.current) {
        contentRef.current.scrollTop = initialScrollState.scrollTop;
      }
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(updateAllNavScrollState);

    window.addEventListener('resize', updateAllNavScrollState);

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateAllNavScrollState)
      : null;

    if (resizeObserver) {
      if (topNavRef.current) {
        resizeObserver.observe(topNavRef.current);
      }

      if (sideNavRef.current) {
        resizeObserver.observe(sideNavRef.current);
      }
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateAllNavScrollState);
      resizeObserver?.disconnect();
    };
  }, [activePartId, updateAllNavScrollState]);

  const saveScrollState = (
    scrollTop: number,
    nextActivePartId: string,
    nextActiveSectionId: string
  ) => {
    setSavedScrollState({
      scrollTop,
      activePartId: nextActivePartId,
      activeSectionId: nextActiveSectionId,
    });
  };

  const saveCurrentScrollState = () => {
    saveScrollState(
      usesDocumentScroll() ? window.scrollY : contentRef.current?.scrollTop ?? 0,
      activePartId,
      activeSectionId
    );
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const scrollContainer = contentRef.current;

    if (!(section instanceof HTMLElement)) {
      return;
    }

    window.clearTimeout(programmaticScrollTimeoutRef.current);
    programmaticScrollTimeoutRef.current = window.setTimeout(() => {
      programmaticScrollTimeoutRef.current = undefined;
    }, 1200);

    if (usesDocumentScroll()) {
      const navHeight = topNavRef.current?.getBoundingClientRect().height ?? 0;

      window.scrollTo({
        top: window.scrollY + section.getBoundingClientRect().top - navHeight - 12,
        behavior: 'smooth',
      });
      return;
    }

    if (!(scrollContainer instanceof HTMLElement)) {
      return;
    }

    const containerTop = scrollContainer.getBoundingClientRect().top;
    const sectionTop = section.getBoundingClientRect().top;

    scrollContainer.scrollTo({
      top: scrollContainer.scrollTop + sectionTop - containerTop,
      behavior: 'smooth',
    });
  };

  const onPartButtonClick = (partId: string) => {
    const part = jsCourseParts.find((item) => item.id === partId);
    const nextSectionId = part?.sections[0]?.id ?? partId;

    setActivePartId(partId);
    setActiveSectionId(nextSectionId);
    saveScrollState(
      usesDocumentScroll() ? window.scrollY : contentRef.current?.scrollTop ?? 0,
      partId,
      nextSectionId
    );
    scrollToSection(partId);
  };

  const onSectionButtonClick = (sectionId: string) => {
    const partId = sectionPartById.get(sectionId);

    if (partId) {
      setActivePartId(partId);
    }

    setActiveSectionId(sectionId);
    saveScrollState(
      usesDocumentScroll() ? window.scrollY : contentRef.current?.scrollTop ?? 0,
      partId ?? activePartId,
      sectionId
    );
    scrollToSection(sectionId);
  };

  const updateActiveSection = useCallback((
    scrollTop: number,
    activationLine: number
  ) => {
    if (isLeavingCollectionsRef.current) {
      return;
    }

    if (programmaticScrollTimeoutRef.current !== undefined) {
      window.clearTimeout(programmaticScrollTimeoutRef.current);
      programmaticScrollTimeoutRef.current = window.setTimeout(() => {
        programmaticScrollTimeoutRef.current = undefined;
      }, 150);
      return;
    }

    let currentPart = jsCourseParts[0];

    for (const part of jsCourseParts) {
      const partElement = document.getElementById(part.id);

      if (!partElement) {
        continue;
      }

      if (partElement.getBoundingClientRect().top <= activationLine) {
        currentPart = part;
      }
    }

    let currentSectionId = currentPart.sections[0]?.id ?? currentPart.id;

    for (const section of currentPart.sections) {
      const sectionElement = document.getElementById(section.id);

      if (!sectionElement) {
        continue;
      }

      if (sectionElement.getBoundingClientRect().top <= activationLine) {
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

    saveScrollState(scrollTop, currentPartId, currentSectionId);
  }, [activePartId, activeSectionId]);

  useEffect(() => {
    const onWindowScroll = () => {
      if (!usesDocumentScroll()) {
        return;
      }

      const navBottom = topNavRef.current?.getBoundingClientRect().bottom ?? 0;
      updateActiveSection(window.scrollY, Math.max(0, navBottom) + 80);
    };

    window.addEventListener('scroll', onWindowScroll, { passive: true });

    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [updateActiveSection]);

  const onContentScroll = (event: UIEvent<HTMLDivElement>) => {
    if (usesDocumentScroll()) {
      return;
    }

    const scrollContainer = event.currentTarget;
    updateActiveSection(
      scrollContainer.scrollTop,
      scrollContainer.getBoundingClientRect().top + 80
    );
  };

  const onCourseCollectionCardClick = (collection: Collection) => {
    saveCurrentScrollState();
    isLeavingCollectionsRef.current = true;
    onCollectionCardClick(collection);
  };

  const scrollNavLane = (lane: CourseNavLane, direction: -1 | 1) => {
    const navElement = getNavElement(lane);

    if (!navElement) {
      return;
    }

    navElement.scrollBy({
      left: direction * Math.max(140, Math.round(navElement.clientWidth * 0.72)),
      behavior: 'smooth',
    });

    window.setTimeout(() => updateNavScrollState(lane), 350);
  };

  const getScrollButtonDisabled = (lane: CourseNavLane, direction: -1 | 1) => (
    direction === -1
      ? !navScrollState[lane].canScrollBack
      : !navScrollState[lane].canScrollForward
  );

  return (
    <div className={styles.courseView}>
      <div className={`${styles.navLane} ${styles.topNavLane}`}>
        <button
          type="button"
          className={`${styles.navScrollButton} ${styles.navScrollButtonPrev}`}
          aria-label="Прокрутить основные разделы влево"
          disabled={getScrollButtonDisabled('parts', -1)}
          onClick={() => scrollNavLane('parts', -1)}
        >
          {'‹'}
        </button>
        <nav
          ref={topNavRef}
          className={styles.topNav}
          aria-label="Основные разделы курса"
          onScroll={() => updateNavScrollState('parts')}
        >
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
        <button
          type="button"
          className={`${styles.navScrollButton} ${styles.navScrollButtonNext}`}
          aria-label="Прокрутить основные разделы вправо"
          disabled={getScrollButtonDisabled('parts', 1)}
          onClick={() => scrollNavLane('parts', 1)}
        >
          {'›'}
        </button>
      </div>

      <div className={styles.layout}>
        <div className={`${styles.navLane} ${styles.sideNavLane}`}>
          <button
            type="button"
            className={`${styles.navScrollButton} ${styles.navScrollButtonPrev}`}
            aria-label="Прокрутить разделы курса влево"
            disabled={getScrollButtonDisabled('sections', -1)}
            onClick={() => scrollNavLane('sections', -1)}
          >
            {'‹'}
          </button>
          <aside
            ref={sideNavRef}
            className={styles.sideNav}
            aria-label="Разделы курса"
            data-js-course-side-nav
            onScroll={() => updateNavScrollState('sections')}
          >
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
          <button
            type="button"
            className={`${styles.navScrollButton} ${styles.navScrollButtonNext}`}
            aria-label="Прокрутить разделы курса вправо"
            disabled={getScrollButtonDisabled('sections', 1)}
            onClick={() => scrollNavLane('sections', 1)}
          >
            {'›'}
          </button>
        </div>

        <div ref={contentRef} className={styles.content} data-js-course-content onScroll={onContentScroll}>
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
                        onCollectionCardClick={onCourseCollectionCardClick}
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
