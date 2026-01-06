"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function EditPost({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [cat, setCat] = useState("");
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/admin/login");
        } else {
            setUser(JSON.parse(storedUser));
            fetchPost();
        }
    }, [router]);

    const fetchPost = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:5000/api/posts/${resolvedParams.id}`);
            const data = await res.json();
            setTitle(data.title || "");
            setDesc(data.desc || "");
            setCat(data.categories?.[0] || "");
            if (data.photo) setPreview(data.photo);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const updatedPost: any = {
            username: user.username,
            title,
            desc,
            categories: [cat],
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);

            try {
                await fetch("http://127.0.0.1:5000/api/upload", {
                    method: "POST",
                    body: data,
                });
                updatedPost.photo = "http://127.0.0.1:5000/images/" + filename;
            } catch (err) {
                console.log(err);
            }
        }

        try {
            const res = await fetch(`http://127.0.0.1:5000/api/posts/${resolvedParams.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedPost),
            });

            if (res.ok) {
                router.push("/admin/manage");
            }
        } catch (err) {
            console.log(err);
        }
    };

    if (!user) return <div className="text-center py-20">Yükleniyor...</div>;

    return (
        <div className="max-w-2xl mx-auto py-8">
            <Link href="/admin/manage" className="text-blue-600 hover:underline mb-8 inline-block">
                ← Listeye Dön
            </Link>

            <h1 className="text-3xl font-bold mb-8 text-slate-800">Yazıyı Düzenle</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-slate-700">Başlık</label>
                    <input
                        type="text"
                        value={title}
                        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-slate-700">Kategori</label>
                    <select
                        value={cat}
                        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                        onChange={e => setCat(e.target.value)}
                    >
                        <option value="">Seçiniz</option>
                        <option value="aile">Aile Hukuku</option>
                        <option value="ceza">Ceza Hukuku</option>
                        <option value="ticaret">Ticaret Hukuku</option>
                        <option value="genel">Genel</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-slate-700">Kapak Fotoğrafı (Değiştirmek için seçin)</label>
                    <input
                        type="file"
                        className="p-3 border border-slate-300 rounded-lg text-slate-900"
                        onChange={e => {
                            const file = e.target.files ? e.target.files[0] : null;
                            setFile(file);
                            if (file) {
                                setPreview(URL.createObjectURL(file));
                            }
                        }}
                    />
                    {preview && (
                        <div className="relative w-full h-48 mt-2 rounded-lg overflow-hidden border border-slate-200">
                            <img src={preview} alt="Önizleme" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-slate-700">İçerik</label>
                    <div className="h-60 bg-white">
                        <ReactQuill
                            theme="snow"
                            value={desc}
                            onChange={setDesc}
                            className="h-full pb-10"
                        />
                    </div>
                </div>

                <button className="bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-700 transition mt-4">
                    Güncelle
                </button>
            </form>
        </div>
    );
}
