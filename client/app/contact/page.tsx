import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            {/* Contact Header */}
            <section className="bg-slate-950 py-32 relative text-center">
                <div className="container mx-auto px-6 relative z-10">
                    <h4 className="text-primary font-serif font-bold tracking-[0.3em] uppercase text-sm mb-4">Bize Ulaşın</h4>
                    <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white uppercase tracking-tighter">İletişim</h1>
                    <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
                </div>
            </section>

            <section className="py-24 -mt-24 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Info Cards */}
                        <div className="bg-white p-12 shadow-xl rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-6">📍</div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Adres</h3>
                            <p className="text-slate-600">Yavruturna Mah. Kulaksız Sokak No:12/A<br />Merkez / ÇORUM</p>
                        </div>
                        <div className="bg-white p-12 shadow-xl rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl mb-6">📞</div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Telefon</h3>
                            <p className="text-slate-600 mb-2">+90 (364) 222 11 00</p>
                            <p className="text-slate-600">+90 (532) 000 00 00</p>
                        </div>
                        <div className="bg-white p-12 shadow-xl rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl mb-6">📧</div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">E-Posta</h3>
                            <p className="text-slate-600 mb-2">info@avukatalitaylan.com.tr</p>
                            <p className="text-slate-600">ali.taylan@hukuk.com.tr</p>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col lg:flex-row gap-16 items-stretch">
                        {/* Contact Form */}
                        <div className="flex-[2] bg-white p-10 lg:p-16 shadow-2xl rounded-2xl border border-slate-100">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Mesaj Bırakın</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Ad Soyad</label>
                                    <input type="text" className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition" placeholder="Ali Yılmaz" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">E-Posta</label>
                                    <input type="email" className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition" placeholder="ali@örnek.com" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Konu</label>
                                    <input type="text" className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition" placeholder="Hukuki Danışmanlık" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mesajınız</label>
                                    <textarea rows={5} className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition" placeholder="Sorunuzu buraya yazabilirsiniz..."></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-lg font-bold tracking-[0.2em] hover:bg-primary hover:text-slate-950 transition-all duration-300">
                                        MESAJI GÖNDER
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Map Placeholder */}
                        <div className="flex-1 min-h-[400px] relative rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-white">
                            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-12 text-center">
                                <div className="text-6xl mb-6">📍</div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Harita Konumu</h3>
                                <p className="text-slate-500 text-sm">Ofisimiz Çorum merkezinde, kolay ulaşılabilir bir konumdadır.</p>
                                <button className="mt-8 bg-white border border-slate-900 text-slate-950 px-8 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-slate-950 hover:text-white transition">
                                    YOL TARİFİ AL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
