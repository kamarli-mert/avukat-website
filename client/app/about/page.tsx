import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* About Header */}
            <section className="bg-slate-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/images/ui/hero-bg.png" alt="Arka Plan" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h4 className="text-primary font-serif font-bold tracking-[0.3em] uppercase text-sm mb-4">Kurumsal</h4>
                    <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white uppercase tracking-tighter">Hakkımızda</h1>
                    <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">Yılların Tecrübesi ile Güven Veriyoruz</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Avukat Ali Taylan Hukuk ve Danışmanlık Bürosu, kuruluşundan itibaren adaletin tesisi ve müvekkillerinin haklarının korunması amacıyla titizlikle çalışmaktadır. Ankara Üniversitesi Hukuk Fakültesi mezunu olan Ali Taylan, geniş tecrübesiyle birçok karmaşık davayı başarıyla sonuçlandırmıştır.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Büromuz, hukukun her alanında güncel gelişmeleri takip ederek, müvekkillerine en doğru ve en hızlı çözümü sunmayı ilke edinmiştir. Gizlilik, şeffaflık ve dürüstlük temel çalışma prensiplerimizdir.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <h3 className="text-4xl font-serif font-bold text-primary mb-2">12+</h3>
                                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold font-sans">Yıllık Tecrübe</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-serif font-bold text-primary mb-2">1000+</h3>
                                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold font-sans">Başarılı Dava</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/images/ui/about-statue.png" alt="Ali Taylan" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-primary p-10 hidden lg:block">
                                <p className="text-slate-950 font-serif font-bold italic text-xl">"Hak verilmez, hak aranır."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="text-center">
                            <div className="text-5xl mb-6 flex justify-center">🛡️</div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Gizlilik</h3>
                            <p className="text-slate-600">Müvekkil bilgilerinin korunması ve gizlilik ilkesi bizim için en kutsal değerdir.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-6 flex justify-center">🎯</div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Sonuç Odaklılık</h3>
                            <p className="text-slate-600">Hukuki süreçleri en hızlı ve en verimli şekilde sonuçlandırmak için strateji geliştiriyoruz.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-6 flex justify-center">🤝</div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Şeffaflık</h3>
                            <p className="text-slate-600">Sürecin her aşamasında müvekkillerimizi bilgilendiriyor ve açık iletişim kuruyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
