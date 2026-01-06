"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (pathname !== "/admin/login" && !storedUser) {
            router.push("/admin/login");
        } else {
            setAuthorized(true);
        }
    }, [pathname, router]);

    const getTitle = () => {
        if (pathname === "/admin") return "Yönetim Paneli";
        if (pathname === "/admin/manage") return "Yazıları Yönet";
        if (pathname === "/admin/add") return "Yeni Yazı Ekle";
        if (pathname.startsWith("/admin/edit")) return "Yazıyı Düzenle";
        if (pathname === "/admin/login") return "Admin Girişi";
        return "Yönetim";
    };

    if (!authorized && pathname !== "/admin/login") {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[30vh] lg:h-[40vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/ui/hero-bg.png"
                    alt="Admin"
                    fill
                    className="object-cover brightness-[0.2]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                        {getTitle()}
                    </h1>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 lg:py-16">
                {children}
            </div>
        </div>
    );
}
