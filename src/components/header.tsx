import Logo from '@/assets/logo.svg'
import { LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext';

export function Header() {

    const { logOut } = useAuth();

    return (
        <header className="w-full flex items-center justify-between z-50 mb-4 ">
            <img className='w-20 h-12 ' src={Logo} alt="Logotipo" />
            <LogOut onClick={logOut} className='size-6 cursor-pointer hover:text-orange-600 transform transition duration-300 '  />
        </header>
    )
}