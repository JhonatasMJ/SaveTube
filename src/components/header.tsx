import Logo from '@/assets/logo.svg'
import { LogOut } from 'lucide-react'

export function Header() {
    return (
        <header className="w-full flex items-center justify-between">
            <img className='w-20 h-12' src={Logo} alt="Logotipo" />
            <LogOut className='size-6 cursor-pointer hover:text-pink-500 transform transition duration-300' />
        </header>
    )
}