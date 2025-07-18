import { createContext, useContext, useEffect, useState } from "react";
import type { AuthData, AuthProps, SignCredentials, User } from "../types/auth";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useLoading } from "./LoadingContext";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({} as AuthData);

export function AuthProvider({ children }: AuthProps) {
  const { toggleLoading } = useLoading();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();


  //Sair da Conta
  async function logOut() {
    try {
      toggleLoading(true);
      await auth.signOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoading(false);
    }
  }


  //Criar Conta
  async function register({ email, senha }: SignCredentials) {
    try {
      toggleLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, email, senha);
      setUser({
        id: user.uid,
        email: user.email || "",
      });
      navigate("/");
      console.log("Usuário registrado com sucesso:", user);
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoading(false);
    }
  }



//Logar na Conta
  async function login({ email, senha }: SignCredentials) {
    try {
      toggleLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, senha);
      setUser({
        id: user.uid,
        email: user.email || "",
      });
      navigate("/");
      console.log("Usuário registrado com sucesso:", user);
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoading(false);
    }
  }

//Verifica se o usuário está logado
  useEffect(() => { 
      onAuthStateChanged(auth, (fireUser) => {
        if (fireUser) {
          setUser({
            email: String( fireUser.email),
            id: fireUser.uid,
          });
        } else {
          navigate("/login");
        }
        toggleLoading(false);
      })
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

//Deixo pronto para usar
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
