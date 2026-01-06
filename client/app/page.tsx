"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const practiceAreas = [
    {
      title: "Aile Hukuku",
      desc: "Boşanma, mal paylaşımı ve katılma alacağı gibi konularda müvekkillerimize hukuki destek sağlıyoruz.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "İş Hukuku",
      desc: "İşçilik alacakları ve işe iade davaları gibi işçi-işveren ilişkilerini düzenleyen konularda hizmet veriyoruz.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Gayrimenkul Hukuku",
      desc: "Gayrimenkul alım satım işlemleri ve kira sözleşmeleri gibi konularda hukuki danışmanlık sunmaktayız.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "İcra ve İflas Hukuku",
      desc: "Alacak davaları ve menfi tespit davaları ile müvekkillerimizin haklarını korumaya yönelik çözümler üretiyoruz.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Tüketici Hukuku",
      desc: "Tüketici hakları ihlalleri ve tüketici sözleşmeleri gibi alanlarda hukuki destek sağlıyoruz.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Ceza Hukuku",
      desc: "Ceza davalarında savunma hizmetleri ve hukuki danışmanlık ile müvekkillerimizin yanında yer alıyoruz.",
      image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  const faqs = [
    { q: "Boşanma sürecinde nelere dikkat etmeliyim?", a: "Boşanma sürecinde, mal paylaşımı, çocukların velayeti ve nafaka gibi konulara dikkat etmek önemlidir. Bu süreçte hukuki destek almak, haklarınızı korumanıza yardımcı olur." },
    { q: "İşten haksız yere çıkarıldım, ne yapmalıyım?", a: "İşten haksız yere çıkarıldığınızı düşünüyorsanız, işe iade davası açma hakkınız bulunmaktadır. Bu süreçte iş hukuku alanında uzman bir avukattan destek almanız önerilir." },
    { q: "Tüketici haklarımı nasıl koruyabilirim?", a: "Tüketici haklarınızı korumak için, aldığınız ürün veya hizmetle ilgili yaşadığınız sorunları belgeleyin ve ilgili kurumlarla iletişime geçin. Gerekirse, hukuki destek alarak yasal yollarla hakkınızı arayabilirsiniz." },
    { q: "Miras paylaşımı sırasında neler yapmalıyım?", a: "Miras paylaşımında, mirasçıların haklarını belirlemek ve olası anlaşmazlıkları önlemek için hukuki bir danışmanlık almak önemlidir. Mirasın yasal yollarla paylaşılması için gereken belgeleri ve süreçleri avukatınızla birlikte gözden geçirmeniz faydalı olacaktır." },
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
                Hukuk Büromuz, 2012 yılında Avukat Ali Taylan tarafından kurulmuştur. Müvekkillerimizin menfaat ve ihtiyaçları doğrultusunda yaratıcı ve çözüm odaklı avukatlık ve danışmanlık hizmeti sunmaktayız. Ana çalışma alanlarımız arasında aile hukuku, boşanma ve mal rejimleri, iş hukuku, miras hukuku, icra hukuku, tüketici hukuku, ceza hukuku ve ticaret hukuku yer almaktadır.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Büromuzun amacı, müvekkillerimizi en iyi şekilde temsil etmek ve meslek ilke ve değerlerine uygun hizmet sunmaktır. Mevcut hukuki ihtilafları, en az masraf ve en hızlı şekilde müvekkil yararına sonuçlandırmak için çalışıyoruz. Sizlere güvenilir ve etkili bir hizmet sunmak için buradayız.
              </p>
              <Link href="/about" className="inline-block border-2 border-slate-900 px-8 py-3 font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                Hakkımızda Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex justify-between items-end border-b border-slate-100 pb-8 mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">Faaliyet Alanlarımız</h2>
            </div>
            <Link href="/faaliyet-alanlarimiz" className="text-slate-500 hover:text-primary transition-colors text-xs uppercase tracking-[0.3em] font-bold pb-2">
              TÜMÜNÜ İNCELEYİN
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden shadow-2xl">
            {practiceAreas.map((area, index) => (
              <div key={index} className="group relative h-[350px] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.25]"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-center text-white z-10 transition-transform duration-500 group-hover:-translate-y-6">
                  <h3 className="text-2xl font-serif font-bold mb-4">{area.title}</h3>
                  <div className="h-px w-12 bg-primary mb-6 transition-all duration-500 group-hover:w-full"></div>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-xs transition-opacity duration-500 line-clamp-6">
                    {area.desc}
                  </p>
                  <Link href="/contact" className="mt-8 text-primary font-bold text-[10px] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 uppercase">
                    BİLGİ ALIN →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-800 text-lg mb-8 leading-relaxed">
                Hukuki süreçlerle ilgili aklınıza takılan en yaygın soruları sizler için yanıtladık. Daha detaylı bilgi için bize ulaşabilirsiniz.
              </p>
              <div className="p-10 bg-slate-900 text-white rounded-2xl relative overflow-hidden group min-h-[300px] flex items-center">
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop"
                  alt="Makalelerimiz"
                  fill
                  className="object-cover opacity-30 transition-opacity duration-700"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif font-bold mb-4">Makalelerimiz</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Av. Ali Taylan Hukuk ve Danışmanlık olarak internet üzerindeki okurlarımız için dijital içerikler üretiyoruz. Makalelerimizi görüntülemek için ilgili sayfayı ziyaret edebilirsiniz.
                  </p>
                  <Link href="/makalelerimiz" className="bg-primary text-slate-950 px-8 py-3 rounded-sm font-bold text-xs tracking-widest transition-all hover:bg-white inline-block uppercase">
                    MAKALELERİMİZ
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-primary/40 shadow-lg' : 'border-slate-200 hover:border-slate-300'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full text-left p-6 flex justify-between items-center transition-colors ${openFaq === index ? 'bg-blue-100/40' : 'bg-slate-50/50 hover:bg-slate-50'}`}
                >
                  <span className={`text-lg font-serif font-bold transition-colors ${openFaq === index ? 'text-primary' : 'text-slate-900'}`}>{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-8 bg-blue-100/30 text-slate-950 leading-relaxed border-t border-blue-200/50 font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-serif font-bold text-slate-950 mb-6 italic">"Adalet her zaman kazanır, biz sadece ona rehberlik ederiz."</h2>
          <Link href="/contact" className="inline-block bg-slate-950 text-white px-8 py-3 rounded-sm font-bold tracking-widest hover:bg-slate-800 transition shadow-xl text-sm">
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
