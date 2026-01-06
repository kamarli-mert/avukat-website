"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ManagePosts() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/admin/login");
        } else {
            setUser(JSON.parse(storedUser));
            fetchPosts();
        }
    }, [router]);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/posts");
            const data = await res.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Bu yazıyı silmek istediğinize emin misiniz?")) {
            try {
                const res = await fetch(`/api/posts/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    setPosts(posts.filter((post: any) => post.id !== id));
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    if (!user) return <div className="text-center py-20">Yükleniyor...</div>;

    return (
        <div>
            <div className="flex justify-end mb-8">
                <Link href="/admin" className="text-slate-500 hover:text-primary transition-colors text-xs uppercase tracking-[0.3em] font-bold pb-2">
                    ← Geri Dön
                </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                        <tr>
                            <th className="p-4">Görsel</th>
                            <th className="p-4">Başlık</th>
                            <th className="p-4 uppercase">Kategori</th>
                            <th className="p-4">Tarih</th>
                            <th className="p-4 text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {posts.map((post: any) => (
                            <tr key={post.id} className="hover:bg-slate-50 transition">
                                <td className="p-4 w-24">
                                    {post.photo ? (
                                        <div className="relative w-16 h-12 rounded overflow-hidden border border-slate-100">
                                            <Image src={post.photo} alt={post.title} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="w-16 h-12 bg-slate-100 rounded flex items-center justify-center text-[10px] text-slate-400 uppercase">
                                            Yok
                                        </div>
                                    )}
                                </td>
                                <td className="p-4 font-medium text-slate-800 max-w-xs truncate">
                                    {post.title}
                                </td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded uppercase">
                                        {post.categories?.[0] || "Genel"}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-slate-500">
                                    {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                                </td>
                                <td className="p-4 text-right flex justify-end gap-2">
                                    <Link
                                        href={`/admin/edit/${post.id}`}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                                        title="Düzenle"
                                    >
                                        ✏️
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                                        title="Sil"
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-12 text-center text-slate-400">
                                    Henüz bir yazı bulunmuyor.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
