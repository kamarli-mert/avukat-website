import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/ui/hero-bg.png"
                    alt="Hakkımızda"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">Hakkımızda</h1>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">Yılların Tecrübesi ile Güven Veriyoruz</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Hukuk Büromuz, 2012 yılında Avukat Ali Taylan tarafından kurulmuştur. Müvekkillerimizin menfaat ve ihtiyaçları doğrultusunda yaratıcı ve çözüm odaklı avukatlık ve danışmanlık hizmeti sunmaktayız. Ana çalışma alanlarımız arasında aile hukuku, boşanma ve mal rejimleri, iş hukuku, miras hukuku, icra hukuku, tüketici hukuku, ceza hukuku ve ticaret hukuku yer almaktadır.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Büromuzun amacı, müvekkillerimizi en iyi şekilde temsil etmek ve meslek ilke ve değerlerine uygun hizmet sunmaktır. Mevcut hukuki ihtilafları, en az masraf ve en hızlı şekilde müvekkil yararına sonuçlandırmak için çalışıyoruz. Sizlere güvenilir ve etkili bir hizmet sunmak için buradayız.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <h3 className="text-4xl font-serif font-bold text-primary mb-2">13+</h3>
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


        </div>
    );
}
