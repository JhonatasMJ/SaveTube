"use client"

import Logo from "@/assets/logo.svg"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod/v4"
import { InputForm } from "../components/inputForm"
import { Lock, Mail } from "lucide-react"
import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

interface FormData {
  email: string
  senha: string
}

const schema = z.object({
  email: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
  senha: z.string().min(1, "Senha obrigatória"),
})

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const { login } = useAuth()
  async function handleLogin(form: FormData) {
    await login(form)
  }

  const navigate = useNavigate()

  return (
    <main className="w-full h-full flex flex-col bg-stone-900 text-white overflow-hidden">
      <div className="flex flex-col h-full p-4 overflow-y-auto">
        <div className="flex-shrink-0 text-center mb-6">
          <img className="w-24 h-16 mx-auto" src={Logo || "/placeholder.svg"} alt="Logotipo" />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
            <span className="h-2.5 w-1 bg-orange-500"></span>
            Login
          </h3>

          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4 mb-4">
            <InputForm
              icon={<Mail className="size-4 ml-2 focus:text-orange-500" />}
              label="E-mail"
              placeholder="Digite seu e-mail"
              control={control}
              id="email"
              type="email"
              error={errors.email?.message}
            />
            <InputForm
              icon={<Lock className="size-4 ml-2 focus:text-orange-500" />}
              label="Senha"
              placeholder="Digite sua Senha"
              control={control}
              id="senha"
              type="password"
              error={errors.senha?.message}
            />
            <Button className="bg-orange-500" type="submit" titulo="Entrar" />
          </form>

          <div className="relative my-4">
            <div className="w-full bg-orange-500 h-1 rounded-xs"></div>
            <p className="text-center text-sm bg-stone-900 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3">
              Ou
            </p>
          </div>

          <Button
            onClick={() => navigate("/register")}
            className="bg-stone-700 hover:bg-stone-600"
            titulo="Criar Conta"
          />
        </div>
      </div>
    </main>
  )
}
