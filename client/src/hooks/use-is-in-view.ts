import * as React from 'react';
import { useInView, type MarginType } from 'motion/react';

interface UseIsInViewOptions {
  inView?: boolean;
  inViewOnce?: boolean;
  inViewMargin?: MarginType;
}

interface UseIsInViewResult {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
}

function useIsInView(
  ref: React.Ref<HTMLElement | null> | undefined,
  options: UseIsInViewOptions = {}
): UseIsInViewResult {
  const { inView, inViewOnce = false, inViewMargin = '0px' } = options;
  const localRef = React.useRef<HTMLElement | null>(null);
  React.useImperativeHandle(ref, () => localRef.current);
  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;
  return { ref: localRef, isInView };
}

export { useIsInView };
