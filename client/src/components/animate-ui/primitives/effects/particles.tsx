'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { Slot } from '@/components/animate-ui/primitives/animate/slot';
import { useIsInView } from '@/hooks/use-is-in-view';
import { getStrictContext } from '@/lib/get-strict-context';

const [ParticlesProvider, useParticles] =
  getStrictContext<{ animate: boolean; isInView: boolean }>('ParticlesContext');

interface ParticlesProps extends React.ComponentProps<'div'> {
  animate?: boolean;
  asChild?: boolean;
  inView?: boolean;
  inViewMargin?: string;
  inViewOnce?: boolean;
}

function Particles({
  ref,
  animate = true,
  asChild = false,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  children,
  style,
  ...props
}: ParticlesProps) {
  const { ref: localRef, isInView } = useIsInView(
    ref,
    { inView, inViewOnce, inViewMargin },
  );

  const Component = asChild ? Slot : motion.div;

  return (
    <ParticlesProvider value={{ animate, isInView }}>
      <Component
        ref={localRef}
        style={{ position: 'relative', ...style }}
        {...props}
      >
        {children}
      </Component>
    </ParticlesProvider>
  );
}

interface ParticlesEffectProps extends React.ComponentProps<'div'> {
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  count?: number;
  radius?: number;
  spread?: number;
  duration?: number;
  holdDelay?: number;
  sideOffset?: number;
  alignOffset?: number;
  delay?: number;
  transition?: any;
}

function ParticlesEffect({
  side = 'top',
  align = 'center',
  count = 6,
  radius = 30,
  spread = 360,
  duration = 0.8,
  holdDelay = 0.05,
  sideOffset = 0,
  alignOffset = 0,
  delay = 0,
  transition,
  style,
  ...props
}: ParticlesEffectProps) {
  const { animate, isInView } = useParticles();

  const isVertical = side === 'top' || side === 'bottom';
  const alignPct = align === 'start' ? '0%' : align === 'end' ? '100%' : '50%';

  const top = isVertical
    ? side === 'top'
      ? `calc(0% - ${sideOffset}px)`
      : `calc(100% + ${sideOffset}px)`
    : `calc(${alignPct} + ${alignOffset}px)`;

  const left = isVertical
    ? `calc(${alignPct} + ${alignOffset}px)`
    : side === 'left'
      ? `calc(0% - ${sideOffset}px)`
      : `calc(100% + ${sideOffset}px)`;

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
    transform: 'translate(-50%, -50%)',
  };

  const angleStep = (spread * (Math.PI / 180)) / Math.max(1, count - 1);

  return (
    <AnimatePresence>
      {animate &&
        isInView &&
        [...Array(count)].map((_, i) => {
          const angle = i * angleStep;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const { 
            onDrag, 
            onDragStart, 
            onDragEnd, 
            ...safeProps 
          } = props as any;

          return (
            <motion.div
              key={i}
              style={{ ...containerStyle, ...style }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                x: `${x}px`,
                y: `${y}px`,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                delay: delay + i * holdDelay,
                ease: 'easeOut',
                ...transition,
              }}
              {...safeProps}
            />
          );
        })}
    </AnimatePresence>
  );
}

export { Particles, ParticlesEffect };
