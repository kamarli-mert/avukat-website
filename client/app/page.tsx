"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const practiceAreas = [
    { title: "Aile Hukuku", desc: "Boşanma, mal paylaşımı ve velayet davalarında uzman destek.", icon: "⚖️" },
    { title: "İş Hukuku", desc: "İşçi-işveren uyuşmazlıkları ve iade davaları yönetimi.", icon: "👨‍💼" },
    { title: "Gayrimenkul Hukuku", desc: "Alım-satım, kira sözleşmeleri ve tapu davaları.", icon: "🏠" },
    { title: "İcra ve İflas Hukuku", desc: "Alacak takibi ve borç yapılandırma süreçleri.", icon: "📑" },
    { title: "Tüketici Hukuku", desc: "Tüketici hakları ve ayıplı mal uyuşmazlıkları.", icon: "🛒" },
    { title: "Ceza Hukuku", desc: "Etkin savunma ve hukuki danışmanlık hizmetleri.", icon: "🏛️" },
  ];

  const faqs = [
    { q: "Boşanma sürecinde nelere dikkat etmeliyim?", a: "Boşanma sürecinde mal paylaşımı, çocukların velayeti ve nafaka gibi konular kritik öneme sahiptir. Profesyonel yardım almak haklarınızı korumanızı sağlar." },
    { q: "İşten haksız yere çıkarıldım, ne yapmalıyım?", a: "İşe iade davası veya kıdem-ihbar tazminatı talebi için yasal süreleri kaçırmadan hukuki süreci başlatmalısınız." },
    { q: "Tüketici haklarımı nasıl koruyabilirim?", a: "Ayıplı bir mal veya hizmet aldığınızda Tüketici Hakem Heyeti veya Tüketici Mahkemeleri aracılığıyla hak arayabilirsiniz." },
    { q: "Miras paylaşımı sırasında neler yapmalıyım?", a: "Veraset ilamı çıkarılması ve mirasın hakkaniyetli paylaşımı için hukuki danışmanlık almak uyuşmazlıkları önler." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ui/hero-bg.png"
          alt="Hukuk Bürosu"
          fill
          className="object-cover brightness-[0.3] scale-105"
          priority
        />
        <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <h4 className="text-primary font-serif italic text-lg lg:text-xl tracking-widest mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">Hukuk ve Danışmanlık</h4>
            <h1 className="text-5xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Av. Ali <span className="text-primary">TAYLAN</span>
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              Çorum ili başta olmak üzere Türkiye genelinde profesyonel, sonuç odaklı ve güvenilir hukuki danışmanlık hizmetleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              <Link href="/about" className="bg-primary hover:bg-white text-slate-950 px-10 py-4 rounded-sm font-bold tracking-widest transition-all duration-300 shadow-xl shadow-primary/20">
                HAKKIMIZDA
              </Link>
              <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-sm font-bold tracking-widest transition-all duration-300 backdrop-blur-sm">
                İLETİŞİM
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/ui/about-statue.png" alt="Adalet Heykeli" width={600} height={800} className="object-cover" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-primary/20 -z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 -z-0"></div>
            </div>
            <div className="flex-1 space-y-8">
              <h4 className="text-primary font-serif font-bold tracking-[0.3em] uppercase text-sm">Biz Kimiz?</h4>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">Profesyonel ve Güvenilir <br />Hukuki Çözümler</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Hukuk Büromuz, 2012 yılında Avukat Ali Taylan tarafından kurulmuştur. Müvekkillerimizin menfaat ve ihtiyaçları doğrultusunda yaratıcı ve çözüm odaklı avukatlık hizmeti sunmaktayız.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Büromuzun amacı, müvekkillerimizi en iyi şekilde temsil etmek ve meslek ilke ve değerlerine uygun hizmet sunmaktır. Mevcut hukuki ihtilafları, en az masraf ve en hızlı şekilde müvekkil yararına sonuçlandırmak için çalışıyoruz.
              </p>
              <Link href="/about" className="inline-block border-2 border-slate-900 px-8 py-3 font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 text-center mb-16">
          <h4 className="text-primary font-serif font-bold tracking-[0.3em] uppercase text-sm mb-4">Hizmet Alanlarımız</h4>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900">Faaliyet Alanlarımız</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-8xl">{area.icon}</span>
                </div>
                <div className="text-4xl mb-6 bg-slate-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-500">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{area.desc}</p>
                <Link href="/contact" className="text-primary font-bold text-sm tracking-widest hover:translate-x-2 transition-transform inline-block">
                  BİLGİ ALIN →
                </Link>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm uppercase tracking-[0.3em] font-bold">
              Tümünü İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <div className="sticky top-32">
              <h4 className="text-primary font-serif font-bold tracking-[0.3em] uppercase text-sm mb-4">Yardım Masası</h4>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Hukuki süreçlerle ilgili aklınıza takılan en yaygın soruları sizler için yanıtladık. Daha detaylı bilgi için bize ulaşabilirsiniz.
              </p>
              <div className="p-8 bg-slate-900 text-white rounded-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-serif font-bold mb-4">Ücretsiz Danışmanlık?</h3>
                  <p className="text-slate-400 mb-6">İlk randevunuzu hemen oluşturarak durumunuzu değerlendirelim.</p>
                  <Link href="/contact" className="bg-primary text-slate-950 px-6 py-3 rounded-lg font-bold text-sm transition hover:scale-105 inline-block">
                    Hemen Ara
                  </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">⚖️</div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-serif font-bold text-slate-900">{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-8 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-slate-950 mb-8 italic">"Adalet her zaman kazanır, biz sadece ona rehberlik ederiz."</h2>
          <Link href="/contact" className="inline-block bg-slate-950 text-white px-12 py-5 rounded-sm font-bold tracking-widest hover:bg-slate-800 transition shadow-2xl">
            BİZE ULAŞIN
          </Link>
        </div>
      </section>

      {/* Styles for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
