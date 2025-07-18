import type { ReactNode } from "react";

export interface User {
    id: string;
    email: string;
}

export interface AuthProps {
  children: ReactNode;
}

export interface AuthData {
  user: User | null;
  register: (credentials: SignCredentials) => Promise<void>;
  login: (credentials: SignCredentials) => Promise<void>;
  logOut: () => Promise<void>;
}

export interface SignCredentials {
  email: string;
  senha: string;
}
