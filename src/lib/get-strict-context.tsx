'use client';

import * as React from 'react';

function getStrictContext<T>(name?: string): [
  React.ProviderExoticComponent<React.ProviderProps<T>>,
  () => T
] {
  const Context = React.createContext<T>(undefined as T);

  const Provider = Context.Provider;

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
