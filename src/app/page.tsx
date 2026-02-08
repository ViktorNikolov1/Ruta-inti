import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Compass, BookOpen, User, Mountain, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-[#fdfbf7] selection:bg-amber-100 selection:text-amber-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f2e48]/80 to-[#0f2e48]/40 z-10" />

                {/* Placeholder for a real video or high-quality image */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1280px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg')] bg-cover bg-center bg-fixed animate-pan-slow" />

                <div className="container mx-auto px-4 relative z-20 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm tracking-widest uppercase mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-[#ecb100] animate-pulse"></span>
                        Ruta Inti 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none drop-shadow-lg font-playfair animate-fade-in-up delay-100">
                        Himalaya Rutero
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up delay-200">
                        Más que un viaje, una búsqueda. Descubre qué arquetipo define tu expedición al techo del mundo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
                        <Link href="/quiz">
                            <Button size="xl" variant="secondary" className="w-full sm:w-auto shadow-2xl shadow-amber-500/20 transform hover:-translate-y-1 transition-transform">
                                Comenzar la Travesía <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/archetypes">
                            <Button size="xl" variant="glass" className="w-full sm:w-auto">
                                Explorar Arquetipos
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Decorative Scroll Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0f2e48] mb-6 relative">
                                No todos los caminos llevan al mismo lugar.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                El Himalaya es un espejo. Lo que ves en él depende de lo que llevas dentro.
                                Algunos ven retos deportivos, otros ven dioses antiguos, y otros ven la fragilidad de la tierra.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Esta herramienta está diseñada para alinear tu visión personal con las múltiples capas de realidad que ofrece Nepal, creando una experiencia educativa que trasciende el turismo convencional.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Lightbulb className="w-6 h-6 text-[#ecb100] mb-2" />
                                    <h4 className="font-bold text-[#0f2e48]">Autoconocimiento</h4>
                                    <p className="text-sm text-slate-500">Reflexiona sobre tus motivaciones.</p>
                                </div>
                                <div className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Compass className="w-6 h-6 text-[#a63d40] mb-2" />
                                    <h4 className="font-bold text-[#0f2e48]">Orientación</h4>
                                    <p className="text-sm text-slate-500">Encuentra tu ruta ideal.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e48]/80 via-transparent to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <div className="text-xs uppercase tracking-widest mb-2 text-[#ecb100]">Ruta Inti</div>
                                    <h3 className="text-3xl font-playfair font-italic">"El viaje es la recompensa"</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-[#fdfbf7]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-[#a63d40] font-bold tracking-widest uppercase text-sm">El Proceso</span>
                        <h2 className="text-4xl font-bold text-[#0f2e48] mt-2 mb-4">Tu brújula digital</h2>
                        <div className="w-24 h-1 bg-[#ecb100] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 border border-slate-100"></div>
                            <div className="relative bg-white p-8 rounded-2xl border border-slate-100 z-10 h-full">
                                <div className="w-14 h-14 bg-blue-50 text-[#0f2e48] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold font-playfair">1</div>
                                <h3 className="text-2xl font-bold mb-4 text-[#0f2e48]">El Test</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    12 preguntas diseñadas para explorar tus valores, intereses históricos y sensibilidad espiritual.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 border border-slate-100"></div>
                            <div className="relative bg-white p-8 rounded-2xl border border-slate-100 z-10 h-full">
                                <div className="w-14 h-14 bg-amber-50 text-[#ecb100] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold font-playfair">2</div>
                                <h3 className="text-2xl font-bold mb-4 text-[#0f2e48]">El Arquetipo</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Descubre cuál de los 6 perfiles resuena contigo, desde el "Cronista de la Nación" hasta el "Guardián ODS".
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 border border-slate-100"></div>
                            <div className="relative bg-white p-8 rounded-2xl border border-slate-100 z-10 h-full">
                                <div className="w-14 h-14 bg-red-50 text-[#a63d40] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold font-playfair">3</div>
                                <h3 className="text-2xl font-bold mb-4 text-[#0f2e48]">La Ruta</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Recibe un mapa personalizado y micro-lecciones curadas para enriquecer tu experiencia en terreno.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
