"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Admin() {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/admin/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [router]);

    if (!user) {
        return <div className="text-center py-20">Yükleniyor...</div>;
    }

    return (
        <div className="py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Yönetim Paneli</h1>
                <div className="flex items-center gap-4">
                    <span className="text-slate-600">Hoşgeldin, <b>{user.username}</b></span>
                    <button
                        onClick={() => {
                            localStorage.removeItem("user");
                            router.push("/admin/login");
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
                    >
                        Çıkış Yap
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/admin/add">
                    <div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition cursor-pointer bg-white h-full">
                        <h2 className="text-xl font-bold mb-2 text-blue-600">Yeni Yazı Ekle</h2>
                        <p className="text-slate-500">Bloga yeni bir makale eklemek için tıkla.</p>
                    </div>
                </Link>
                <Link href="/admin/manage">
                    <div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition cursor-pointer bg-white h-full">
                        <h2 className="text-xl font-bold mb-2 text-blue-600">Yazıları Düzenle</h2>
                        <p className="text-slate-500">Mevcut blog yazılarını düzenle veya sil.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
