import Link from "next/link";
import { useState } from "react";
const Header: React.FC = () => {

    const [menuOpen ,setMenuOpen] = useState(false);

    return(
        <header className="bg-gray-800 text-white py-4 px-4">
            <div className="container flex justify-between mx-auto items-center">
            <div className="flex items-center ">
                <h1 className="text-2xl font-bold cursor-pointer">ImageGen</h1>
            </div>

               <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               </button>

            <nav className="hidden md:flex space-x-4 ">
                <Link href="/"  className="hover:text-gray-400 hover:underline">Home</Link>
                <Link href="/gallery" className="hover:text-gray-400 hover:underline">Gallery</Link>
                <Link href="/about" className="hover:text-gray-400 hover:underline">About</Link>
                <Link href="/contact" className="hover:text-gray-400 hover:underline">Contact</Link>
            </nav>
            </div>

            {menuOpen && (
            <nav className=" md:hidden ">
                <Link href="/"  className="hover:text-gray-400 hover:underline">Home</Link>
                <Link href="/gallery" className="hover:text-gray-400 hover:underline">Gallery</Link>
                <Link href="/about" className="hover:text-gray-400 hover:underline">About</Link>
                <Link href="/contact" className="hover:text-gray-400 hover:underline">Contact</Link>
            </nav>
            )}

        </header>
    )
}

export default Header;