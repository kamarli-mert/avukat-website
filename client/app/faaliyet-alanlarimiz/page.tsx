import Image from "next/image";
import Link from "next/link";

const practiceAreas = [
    {
        title: "Aile Hukuku",
        description: "Boşanma, mal paylaşımı, velayet, nafaka ve aile içi şiddet gibi hassas konularda profesyonel ve insani odaklı hukuki destek sağlıyoruz. Aile hukuku uyuşmazlıklarında müvekkillerimizin haklarını en iyi şekilde korurken sürecin manevi yükünü de hafifletmeyi amaçlıyoruz.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "İş Hukuku",
        description: "İşçi-işveren arasındaki uyuşmazlıklar, işe iade davaları, kıdem ve ihbar tazminatı talepleri, mobbing ve toplu iş sözleşmeleri konularında danışmanlık hizmeti sunuyoruz. İş barışının sağlanması ve yasal hakların korunması temel önceliğimizdir.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Gayrimenkul Hukuku",
        description: "Gayrimenkul alım-satım işlemleri, tapu iptal ve tescil davaları, kira sözleşmeleri, kamulaştırma ve kat karşılığı inşaat sözleşmeleri gibi mülkiyet odaklı tüm hukuki süreçlerde uzman kadromuzla yanınızdayız.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "İcra ve İflas Hukuku",
        description: "Alacakların tahsili, icra takipleri, borç yapılandırma, iflas ve konkordato süreçlerinde sonuç odaklı bir yaklaşımla hareket ediyoruz. Şirketlerin ve bireylerin mali dengelerini korumaları için etkin çözümler üretiyoruz.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Tüketici Hukuku",
        description: "Ayıplı mal ve hizmetlerden kaynaklanan uyuşmazlıklar, Tüketici Hakem Heyeti süreçleri, devre tatil ve abonelik sözleşmeleri gibi konularda tüketicilerin yasal haklarını korumak için çalışıyoruz.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Ceza Hukuku",
        description: "Soruşturma ve kovuşturma aşamalarında etkin savunma, ağır ceza davaları, asliye ceza uyuşmazlıkları ve bilişim suçları konularında temel hak ve özgürlüklerin korunması ilkesiyle hareket ediyoruz.",
        image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function FaaliyetAlanlarimiz() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/ui/hero-bg.png"
                    alt="Hukuk Bürosu"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Faaliyet Alanlarımız</h1>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            {/* Grid Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                        {practiceAreas.map((area, index) => (
                            <div key={index} className="group relative h-[400px] overflow-hidden">
                                <Image
                                    src={area.image}
                                    alt={area.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.25]"
                                />
                                <div className="absolute inset-0 p-8 flex flex-col justify-center text-white z-10 transition-transform duration-500 group-hover:-translate-y-6">
                                    <h3 className="text-2xl font-serif font-bold mb-2 transition-transform duration-500">{area.title}</h3>
                                    <div className="h-px w-12 bg-primary mb-6 transition-all duration-700 group-hover:w-full"></div>
                                    <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-700 leading-relaxed">
                                        {area.description}
                                    </p>
                                    <Link href="/contact" className="mt-6 text-primary font-bold text-xs tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 uppercase">
                                        Detaylı Bilgi Al →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-slate-950 text-white border-t border-slate-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">Hukuki Sorunlarınız İçin Profesyonel Çözümler</h2>
                    <p className="max-w-2xl mx-auto text-slate-400 mb-8 text-sm">Durumunuzu değerlendirmek ve bir yol haritası belirlemek için bizimle iletişime geçin.</p>
                    <Link href="/contact" className="bg-primary text-slate-950 px-8 py-3 rounded-sm font-bold tracking-widest hover:bg-white transition-all duration-300 text-sm">
                        BİZE ULAŞIN
                    </Link>
                </div>
            </section>
        </div>
    );
}
