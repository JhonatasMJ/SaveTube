import { createContext, useContext, useState } from "react";
import type { LoadingData, LoadingProps } from "../types/loading";

const LoadingContext = createContext({} as LoadingData);

export function LoadingProvider({ children }: LoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  function toggleLoading(val: boolean) {
    setIsLoading(val);
  }

  return (
  <LoadingContext.Provider value={{ isLoading, toggleLoading }}>
    {children}
  </LoadingContext.Provider>
  )
}

//Deixo pronto para usar
// eslint-disable-next-line react-refresh/only-export-components
export function useLoading() {
  const context = useContext(LoadingContext);
  return context;
}