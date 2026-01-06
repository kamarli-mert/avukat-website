import Image from "next/image";
import Link from "next/link";

async function getData(id: string) {
    const res = await fetch(`http://127.0.0.1:5000/api/posts/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export default async function PostDetail({ params }: { params: { id: string } }) {
    const post = await getData(params.id);

    return (
        <article className="bg-white min-h-screen">
            {/* Post Hero */}
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center">
                {post.photo && (
                    <Image
                        src={post.photo}
                        alt={post.title}
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                )}
                {!post.photo && <div className="absolute inset-0 bg-slate-900" />}

                <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                    <Link href="/blog" className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 inline-block hover:text-white transition">
                        ← BLOGA DÖN
                    </Link>
                    <div className="flex justify-center gap-4 mb-6">
                        <span className="bg-primary text-slate-950 text-[10px] tracking-widest font-bold px-4 py-1.5 rounded-sm uppercase">
                            {post.categories?.[0] || 'Genel'}
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-slate-300 text-sm font-medium tracking-widest uppercase">
                        <span>{new Date(post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>Av. Ali Taylan</span>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="container mx-auto px-6 py-20 -mt-20 relative z-20">
                <div className="max-w-4xl mx-auto bg-white p-8 lg:p-20 shadow-2xl rounded-sm border border-slate-100">
                    <div
                        className="prose prose-lg lg:prose-xl max-w-none text-slate-700 font-serif leading-relaxed blog-content
                        prose-headings:font-serif prose-headings:text-slate-900 prose-headings:font-bold
                        prose-p:mb-8 prose-strong:text-slate-900 prose-strong:font-bold
                        prose-img:rounded-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: post.desc }}
                    />

                    <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xl">⚖️</div>
                            <div>
                                <p className="text-slate-900 font-serif font-bold">Av. Ali Taylan</p>
                                <p className="text-slate-500 text-xs uppercase tracking-widest">Kurucu / Avukat</p>
                            </div>
                        </div>
                        <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-primary hover:text-slate-950 transition-all duration-300 text-sm">
                            HUKUKİ YARDIM ALIN
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
