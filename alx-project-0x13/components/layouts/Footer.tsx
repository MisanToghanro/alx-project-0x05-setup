import Link from "next/link";
const Footer: React.FC = () => {

    const currentYear = () => {
        return new Date().getFullYear()
    }
    
    return(
        <footer className="bg-gray-800 text-white py-6 ">
            <div className="container mx-auto text-center">
                <h1 className="text-lg font-semibold">Image Generation App</h1>
                <p className=" mt-2 text-sm">&copy;{currentYear()}. All rights reserved.</p>

                <div className="mt-4 space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-white hover:underline">Privacy Policy</Link>
                    <Link href="#"  className="text-gray-400 hover:text-white hover:underline">Terms of Service</Link>
                    <Link href="#"  className="text-gray-400 hover:text-white hover:underline">Contact Us</Link>

                </div>
            </div>
        </footer>
    )
}

export default Footer;