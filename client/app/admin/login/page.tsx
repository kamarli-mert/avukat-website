"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem("user", JSON.stringify(data));
                router.push("/admin");
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="bg-slate-50 p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-200">
                <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Admin Girişi</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Kullanıcı Adı"
                        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition">
                        Giriş Yap
                    </button>
                    {error && <span className="text-red-500 text-center text-sm">Hatalı kullanıcı adı veya şifre!</span>}
                </form>
            </div>
        </div>
    );
}
