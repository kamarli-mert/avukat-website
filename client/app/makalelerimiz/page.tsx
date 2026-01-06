import Link from "next/link";
import Image from "next/image";

import prisma from "@/app/lib/prisma";

export default async function BlogPage() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }
    });


    return (
        <div className="pb-24 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-20">
                <Image
                    src="/images/ui/hero-bg.png"
                    alt="Hukuki Makaleler"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">Hukuki Makalelerimiz</h1>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post: any) => (
                        <Link href={`/makalelerimiz/${post.id}`} key={post.id} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100">
                                <div className="relative h-64 w-full overflow-hidden">
                                    {post.photo ? (
                                        <Image
                                            src={post.photo}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition duration-700"
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-400 font-serif italic text-xl">
                                            Av. Ali Taylan
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-slate-950 text-[10px] tracking-widest font-bold px-3 py-1 rounded-sm uppercase">
                                            {post.categories?.[0] || 'Genel'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">
                                        {new Date(post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 line-clamp-3 mb-8 flex-1 leading-relaxed">
                                        {post.description.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                                    </p>
                                    <div className="flex items-center text-primary font-bold text-sm tracking-widest gap-2 group-hover:gap-4 transition-all">
                                        DEVAMINI OKU <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
