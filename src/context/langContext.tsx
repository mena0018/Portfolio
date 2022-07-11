import { createContext, useState } from "react";

type Props = {
   children: React.ReactNode
}

export const Context = createContext<any>(null);

const ContextProvider = ({ children } : Props ) => {
   const [lang, setLang] = useState<string>('FR');

   const toggleLang = (langToChange: string) => setLang(langToChange)
   
   return (
      <Context.Provider value={{ lang, toggleLang }}>
         {children}
      </Context.Provider>
   )
}

export default ContextProvider;