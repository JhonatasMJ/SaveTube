import Logo from "@/assets/logo.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod/v4";
import { InputForm } from "../components/inputForm";
import { Lock, Mail } from "lucide-react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface FormData {
  email: string;
  senha: string;
}

const schema = z.object({
  email: z
    .string()
    .min(1, "E-mail obrigatório")
    .email("E-mail inválido"), 
  senha: z
    .string()
    .min(1, "Senha obrigatória"),
});


export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm <FormData> ({
     resolver: zodResolver(schema),
  });

  const {login} = useAuth(); 
  async function handleLogin(form: FormData) {
   await login (form)
  }

  const navigate = useNavigate();

  return (
    <>
    <main className="w-full h-screen flex">
      <div className="bg-stone-900 relative text-white flex flex-col gap-2 p-4 w-74 h-1/2 ">
        <img className="w-24 h-16 mx-auto" src={Logo} alt="Logotipo" />
        <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
          <span className="h-2.5 w-1 bg-orange-500"></span>
          Login
        </h3>
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col  w-full gap-4">
            <InputForm
              icon= {<Mail className="size-4 ml-2 focus:text-orange-500"/>}
              label="E-mail"
              placeholder="Digite seu e-mail"
              control={control}
              id="email"
              type="email"
              error={errors.email?.message}
            />
             <InputForm
              icon= {<Lock className="size-4 ml-2 focus:text-orange-500"/>}
              label="Senha"
              placeholder="Digite sua Senha"
              control={control}
              id="senha"
              type="password"
              error={errors.senha?.message}
            />
            <Button  className="bg-orange-500" type="submit" titulo="Entrar" />
        </form>
        <div className="z-10 w-full bg-orange-500 h-1 relative left-0  transform rounded-xs my-4 ">
          <p className="text-center text-sm bg-stone-900 absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 ">Ou</p>
        </div>
        <Button onClick={() => navigate("/register")} className="bg-stone-900"  titulo="Criar Conta" />
      </div>
    </main>
    </>
  );
}
