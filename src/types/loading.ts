import type { ReactNode } from "react";

export interface LoadingProps {
  children: ReactNode;
}

export interface LoadingData {
  isLoading: boolean;
  toggleLoading: (val: boolean) => void;
}