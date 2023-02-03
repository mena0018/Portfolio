'use client';

import { createContext, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: Props) => {
  const [lang, setLang] = useState<string>('FR');

  const toggleLang = (langToChange: string) => setLang(langToChange);

  return <Context.Provider value={{ lang, toggleLang }}>{children}</Context.Provider>;
};

export default ContextProvider;
