import {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  TransitionEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface TouchGesture {
  active: boolean;
  axis: 'horizontal' | 'vertical' | null;
  cardWidth: number;
  startedAt: number;
  startX: number;
  startY: number;
}

interface UseCardSwipeOptions {
  canSwipeLeft: boolean;
  canSwipeRight: boolean;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeLeftBoundary?: () => void;
}

const EMPTY_GESTURE: TouchGesture = {
  active: false,
  axis: null,
  cardWidth: 0,
  startedAt: 0,
  startX: 0,
  startY: 0,
};

const SWIPE_DISTANCE_RATIO = 0.25;
const FAST_SWIPE_DISTANCE = 30;
const FAST_SWIPE_DURATION = 300;
const GESTURE_AXIS_THRESHOLD = 8;
const SUPPRESS_CLICK_DURATION = 400;

export const useCardSwipe = ({
  canSwipeLeft,
  canSwipeRight,
  onSwipeLeft,
  onSwipeRight,
  onSwipeLeftBoundary,
}: UseCardSwipeOptions) => {
  const [dragOffset, setDragOffset] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompletingSwipe, setIsCompletingSwipe] = useState(false);
  const touchGesture = useRef<TouchGesture>(EMPTY_GESTURE);
  const suppressClick = useRef(false);
  const suppressClickTimer = useRef<number | null>(null);

  const clearSuppressClickTimer = useCallback(() => {
    if (suppressClickTimer.current !== null) {
      window.clearTimeout(suppressClickTimer.current);
      suppressClickTimer.current = null;
    }
  }, []);

  const resetSwipe = useCallback(() => {
    touchGesture.current = EMPTY_GESTURE;
    setDragOffset(0);
    setIsActive(false);
    setIsDragging(false);
    setIsCompletingSwipe(false);
  }, []);

  useEffect(() => () => {
    clearSuppressClickTimer();
  }, [clearSuppressClickTimer]);

  const suppressSwipeClick = () => {
    suppressClick.current = true;
    clearSuppressClickTimer();

    suppressClickTimer.current = window.setTimeout(() => {
      suppressClick.current = false;
      suppressClickTimer.current = null;
    }, SUPPRESS_CLICK_DURATION);
  };

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
    clearSuppressClickTimer();
  };

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    const target = event.target;

    if (
      event.touches.length !== 1
      || (target instanceof Element && target.closest('pre'))
      || isCompletingSwipe
    ) {
      return;
    }

    const touch = event.touches[0];

    touchGesture.current = {
      active: true,
      axis: null,
      cardWidth: event.currentTarget.getBoundingClientRect().width,
      startedAt: Date.now(),
      startX: touch.clientX,
      startY: touch.clientY,
    };
    suppressClick.current = false;
    clearSuppressClickTimer();
    setDragOffset(0);
    setIsActive(true);
    setIsDragging(true);
  };

  const handleTouchMove = (event: ReactTouchEvent<HTMLDivElement>) => {
    const gesture = touchGesture.current;

    if (!gesture.active || event.touches.length !== 1) {
      return;
    }

    const touch = event.touches[0];
    const deltaX = touch.clientX - gesture.startX;
    const deltaY = touch.clientY - gesture.startY;

    if (gesture.axis === null) {
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < GESTURE_AXIS_THRESHOLD) {
        return;
      }

      gesture.axis = Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
    }

    if (gesture.axis === 'vertical') {
      resetSwipe();
      return;
    }

    event.preventDefault();
    setDragOffset(deltaX);
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const gesture = touchGesture.current;

    if (!gesture.active || gesture.axis !== 'horizontal') {
      resetSwipe();
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - gesture.startX;
    const duration = Date.now() - gesture.startedAt;
    const passedDistance = Math.abs(deltaX) >= gesture.cardWidth * SWIPE_DISTANCE_RATIO;
    const isFastSwipe = duration <= FAST_SWIPE_DURATION && Math.abs(deltaX) >= FAST_SWIPE_DISTANCE;
    const shouldNavigate = passedDistance || isFastSwipe;

    if (Math.abs(deltaX) >= GESTURE_AXIS_THRESHOLD) {
      suppressSwipeClick();
    }

    touchGesture.current = EMPTY_GESTURE;

    if (!shouldNavigate) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    if (deltaX < 0) {
      if (!canSwipeLeft) {
        if (onSwipeLeftBoundary) {
          setIsDragging(false);
          setIsCompletingSwipe(true);
          setDragOffset(-window.innerWidth);
        } else {
          setIsDragging(false);
          setDragOffset(0);
        }

        return;
      }

      resetSwipe();
      onSwipeLeft();
      return;
    }

    if (!canSwipeRight) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    resetSwipe();
    onSwipeRight();
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') {
      return;
    }

    if (isCompletingSwipe) {
      onSwipeLeftBoundary?.();
      return;
    }

    if (!isDragging && dragOffset === 0) {
      setIsActive(false);
    }
  };

  const style = isActive
    ? {
      '--drag-x': `${dragOffset}px`,
    } as CSSProperties
    : undefined;

  return {
    isActive,
    isDragging,
    style,
    resetSwipe,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: resetSwipe,
      onTransitionEnd: handleTransitionEnd,
    },
    handleClickCapture,
  };
};
