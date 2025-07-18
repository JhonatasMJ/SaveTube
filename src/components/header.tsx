import Logo from '@/assets/logo.svg'
import { LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext';

export function Header() {

    const { logOut } = useAuth();

    return (
        <header className="w-full flex items-center justify-center z-50 ">
            <img className='w-20 h-12 ' src={Logo} alt="Logotipo" />
            <LogOut onClick={logOut} className='size-6 cursor-pointer hover:text-pink-500 transform transition duration-300 '  />
        </header>
    )
}