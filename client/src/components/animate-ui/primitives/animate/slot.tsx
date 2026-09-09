'use client';
import * as React from 'react';
import { motion, isMotionComponent } from 'motion/react';
import { cn } from '@/lib/utils';

function mergeRefs<T>(...refs: (React.Ref<T> | string | null | undefined)[]): React.RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'string') {
        // Handle string refs (legacy)
        return;
      }
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps(childProps: any, slotProps: any): any {
  const merged = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className,
      slotProps.className,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style),
      ...(slotProps.style),
    };
  }

  return merged;
}

interface SlotProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

function Slot(
  {
    children,
    ref,
    ...props
  }: SlotProps
) {
  const isAlreadyMotion =
    typeof children === 'object' && 
    children !== null &&
    'type' in children &&
    typeof children.type === 'object' &&
    children.type !== null &&
    isMotionComponent(children.type);

  const Base = React.useMemo(
    () =>
      isAlreadyMotion
        ? (children as React.ReactElement).type
        : motion.create((children as React.ReactElement).type),
    [isAlreadyMotion, children],
  );

  if (!React.isValidElement(children)) return null;

  const { ref: childRef, ...childProps } = children.props;

  const mergedProps = mergeProps(childProps, props);

  return (<Base {...mergedProps} ref={mergeRefs(childRef, ref)} />);
}

export { Slot };
