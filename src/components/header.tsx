"use client"

import Logo from "@/assets/logo.svg"
import { LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export function Header() {
  const { logOut } = useAuth()

  return (
    <header className="w-full flex items-center justify-between z-50 mb-3">
      <img className="w-16 h-10" src={Logo || "/placeholder.svg"} alt="Logotipo" />
      <LogOut
        onClick={logOut}
        className="size-5 cursor-pointer hover:text-orange-600 transform transition duration-300"
      />
    </header>
  )
}
