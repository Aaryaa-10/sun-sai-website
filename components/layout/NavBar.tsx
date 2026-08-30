import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavBar() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3"
                aria-label="Sun Sai home">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-midnight">
                        SS
                    </div>
                    <div className="leading-none">
                        <p className="text-lg font-bold tracking-wide text-white">
                            SUN SAI Transport Company
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
                        Since 1999
                        </p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="#about" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">
                    About
                    </Link>
                    
                    <Link
                        href="#services"
                        className="text-sm font-medium text-white/85 transition-colors hover:text-gold"
                    >
                        Services
                    </Link>

                    <Link href="#fleet" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">
                    Fleet
                    </Link>


                    <Link href="#contact" className="text-sm font-medium text-white/85 transition-colors hover:text-gold">
                    Contact
                    </Link>

                    <Link href="#enquiry" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-midnight transition-transform hover:scale-[1.03]">
                    Send an Enquiry
                    
                    </Link>



                </nav>


                <button
                type="button"
                className="rounded-full border border-white/20 p-2.5 text-white transition-colors hover:bg-white/10 md:hidden" 
                aria-label="Open navigation menu">
                    <Menu size={21} />
                    

                </button>

            </div>
        </header>
    );
}