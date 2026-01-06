"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
    const [user, setUser] = useState<any>(null);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));

        const handleStorageChange = () => {
            const updatedUser = localStorage.getItem("user");
            setUser(updatedUser ? JSON.parse(updatedUser) : null);
        };
        window.addEventListener('storage', handleStorageChange);
        const interval = setInterval(handleStorageChange, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/admin/login");
    };

    const isHome = pathname === "/";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-2xl py-3" : "bg-transparent py-6"
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                        <span className="text-primary font-serif font-bold group-hover:text-slate-950 transition-colors">AT</span>
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-widest text-white group-hover:text-primary transition-colors">
                        Av. Ali TAYLAN
                    </span>
                </Link>

                <div className="hidden md:flex gap-10 items-center">
                    <Link href="/" className={`text-sm tracking-[0.2em] font-medium transition duration-300 ${isHome ? "text-primary" : "text-slate-300 hover:text-primary"}`}>ANA SAYFA</Link>
                    <Link href="/about" className="text-sm tracking-[0.2em] font-medium text-slate-300 hover:text-primary transition duration-300">HAKKIMIZDA</Link>
                    <Link href="/blog" className="text-sm tracking-[0.2em] font-medium text-slate-300 hover:text-primary transition duration-300">BLOG</Link>
                    <Link href="/contact" className="text-sm tracking-[0.2em] font-medium text-slate-300 hover:text-primary transition duration-300">İLETİŞİM</Link>

                    {user ? (
                        <div className="flex gap-6 items-center pl-6 border-l border-slate-700/50">
                            <Link href="/admin" className="bg-primary hover:bg-white text-slate-950 px-5 py-2 rounded-sm text-[10px] tracking-[0.3em] font-bold transition-all duration-300 shadow-lg shadow-primary/20 uppercase">
                                PANEL
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-rose-400 hover:text-rose-300 text-[10px] tracking-[0.3em] font-bold uppercase transition"
                            >
                                ÇIKIŞ
                            </button>
                        </div>
                    ) : (
                        <Link href="/admin/login" className="text-slate-500 hover:text-white text-[10px] tracking-[0.3em] font-bold uppercase transition ml-4">
                            Üye Girişi
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
