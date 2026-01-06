import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/ui/hero-bg.png"
                    alt="İletişim"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">İletişim</h1>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
            </section>

            <section className="py-24 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[600px]">
                        {/* Left Side: Contact Info */}
                        <div className="lg:w-1/3 p-10 lg:p-16 bg-slate-900 text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-serif font-bold mb-12 tracking-tight">İletişim Bilgilerimiz</h2>

                            <div className="space-y-12">
                                {/* Address */}
                                <div className="flex gap-6">
                                    <div className="w-px h-16 bg-primary/50 mt-1"></div>
                                    <div>
                                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Adres</h4>
                                        <p className="text-slate-200 text-base lg:text-lg leading-relaxed font-serif">
                                            Karakeçili Mahallesi, Gazi Caddesi,<br />
                                            Tuncer Apartmanı, No:67/14,<br />
                                            Merkez / Çorum
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-6">
                                    <div className="w-px h-16 bg-primary/50 mt-1"></div>
                                    <div>
                                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Telefon</h4>
                                        <p className="text-slate-200 text-base lg:text-lg tracking-widest font-serif">
                                            +90 543 265 11 81
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-6">
                                    <div className="w-px h-16 bg-primary/50 mt-1"></div>
                                    <div>
                                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">E-Posta</h4>
                                        <p className="text-slate-200 text-base lg:text-lg break-all font-serif">
                                            av.alitaylan@hotmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-12 border-t border-slate-800">
                                <p className="text-slate-300 text-xs tracking-widest uppercase leading-relaxed font-serif italic">
                                    Hukuki danışmanlık ve sorularınız için bize mesai saatleri içerisinde ulaşabilirsiniz.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Map */}
                        <div className="lg:w-2/3 min-h-[500px] relative">
                            <iframe
                                src="https://maps.google.com/maps?q=40.552870,34.961380&z=17&output=embed&iwloc=near"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
