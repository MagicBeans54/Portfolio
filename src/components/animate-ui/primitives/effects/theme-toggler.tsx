'use client';
import * as React from 'react';
import { flushSync } from 'react-dom';

export type ThemeSelection = 'light' | 'dark' | 'system';
export type Resolved = 'light' | 'dark';
export type Direction = 'ltr' | 'rtl' | 'ttb' | 'btt';

export interface ThemeTogglerProps {
  theme?: ThemeSelection | null;
  resolvedTheme?: Resolved | null;
  setTheme?: (theme: ThemeSelection) => void;
  onImmediateChange?: (theme: ThemeSelection) => void;
  direction?: Direction;
  children?: React.ReactNode | ((props: {
    effective: ThemeSelection;
    resolved: Resolved;
    toggleTheme: (theme: ThemeSelection) => Promise<void>;
  }) => React.ReactNode);
}

function getSystemEffective(): Resolved {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getClipKeyframes(direction: Direction): string[] {
  switch (direction) {
    case 'ltr':
      return ['inset(0 100% 0 0)', 'inset(0 0 0 0)'];
    case 'rtl':
      return ['inset(0 0 0 100%)', 'inset(0 0 0 0)'];
    case 'ttb':
      return ['inset(0 0 100% 0)', 'inset(0 0 0 0)'];
    case 'btt':
      return ['inset(100% 0 0 0)', 'inset(0 0 0 0)'];
    default:
      return ['inset(0 100% 0 0)', 'inset(0 0 0 0)'];
  }
}

function ThemeToggler({
  theme,
  resolvedTheme,
  setTheme,
  onImmediateChange,
  direction = 'ltr',
  children,
  ...props
}: ThemeTogglerProps) {
  const [preview, setPreview] = React.useState<{ effective: ThemeSelection; resolved: Resolved } | null>(null);
  const [current, setCurrent] = React.useState<{
    effective: ThemeSelection;
    resolved: Resolved;
  }>({
    effective: theme || 'light',
    resolved: resolvedTheme || 'light',
  });

  React.useEffect(() => {
    if (
      preview &&
      theme === preview.effective &&
      resolvedTheme === preview.resolved
    ) {
      setPreview(null);
    }
  }, [theme, resolvedTheme, preview]);

  const [fromClip, toClip] = getClipKeyframes(direction);

  const toggleTheme = React.useCallback(
    async (newTheme: ThemeSelection) => {
      const resolved = newTheme === 'system' ? getSystemEffective() : newTheme;

      setCurrent({ effective: newTheme, resolved });
      onImmediateChange?.(newTheme);

      if (newTheme === 'system' && resolved === resolvedTheme) {
        setTheme?.(newTheme);
        return;
      }

      if (!document.startViewTransition) {
        flushSync(() => {
          setPreview({ effective: newTheme, resolved });
        });
        setTheme?.(newTheme);
        return;
      }

      await document.startViewTransition(() => {
        flushSync(() => {
          setPreview({ effective: newTheme, resolved });
          document.documentElement.classList.toggle(
            'dark',
            resolved === 'dark',
          );
        });
      }).ready;

      document.documentElement
        .animate(
          { clipPath: [fromClip, toClip] },
          {
            duration: 700,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          },
        )
        .finished.finally(() => {
          setTheme?.(newTheme);
        });
    },
    [onImmediateChange, resolvedTheme, fromClip, toClip, setTheme],
  );

  return (
    <React.Fragment {...props}>
      {typeof children === 'function'
        ? (children as (props: {
            effective: ThemeSelection;
            resolved: Resolved;
            toggleTheme: (theme: ThemeSelection) => Promise<void>;
          }) => React.ReactNode)({
            effective: current.effective,
            resolved: current.resolved,
            toggleTheme,
          })
        : children}
      <style>{`::view-transition-old(root), ::view-transition-new(root){animation:none;mix-blend-mode:normal;}`}</style>
    </React.Fragment>
  );
}

export { ThemeToggler };
