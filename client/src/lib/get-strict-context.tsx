'use client';

import * as React from 'react';

function getStrictContext<T>(name?: string): [
  React.Provider<T>,
  () => T
] {
  const Context = React.createContext<T | undefined>(undefined);

  const Provider = ({
    value,
    children
  }: {
    value: T;
    children: React.ReactNode;
  }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useSafeContext = (): T => {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
    }
    return ctx;
  };

  return [Provider, useSafeContext];
}

export { getStrictContext };
