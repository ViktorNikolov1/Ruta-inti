'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getArchetype } from '@/lib/quizEngine';
import { Theme, Archetype } from '@/lib/types';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Download, RefreshCw, Map as MapIcon, BookOpen, Quote } from 'lucide-react';
import Link from 'next/link';

// Dynamically import map
import dynamic from 'next/dynamic';
const NepalMap = dynamic(() => import('@/components/map/NepalMap'), { ssr: false });

function ResultContent() {
    const searchParams = useSearchParams();
    const theme = searchParams.get('theme') as Theme;
    const [archetype, setArchetype] = useState<Archetype | null>(null);

    useEffect(() => {
        if (theme) {
            // Ensure uppercase for lookup
            const normalizedTheme = theme.toUpperCase() as Theme;
            const data = getArchetype(normalizedTheme);
            if (data) setArchetype(data);
        }
    }, [theme]);

    if (!archetype) return (
        <div className="h-screen flex items-center justify-center bg-[#fdfbf7]">
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-[#0f2e48] border-t-transparent rounded-full animate-spin mb-4"></div>
                <span className="font-playfair text-xl text-[#0f2e48]">Descifrando tu camino...</span>
            </div>
        </div>
    );

    const handleDownload = () => {
        import('@/lib/pdfGenerator').then(mod => {
            const route = undefined;
            mod.generatePDF(archetype, route, process.env.NEXT_PUBLIC_PARTICIPANT_ID);
        });
    };

    return (
        <div className="space-y-12 animate-fade-in-up">
            {/* Dramatic Header */}
            <div className="relative py-20 bg-[#0f2e48] text-white -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#ecb100] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>

                <div className="relative z-10 container mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-widest uppercase mb-6 text-[#ecb100]">
                        Tu Arquetipo
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight drop-shadow-xl">
                        {archetype.rpgPhrase}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        {archetype.description}
                    </p>
                </div>
            </div>

            {/* Narrative Section */}
            <div className="container mx-auto max-w-5xl px-4 -mt-10 relative z-20">
                <div className="grid md:grid-cols-12 gap-8">
                    {/* Main Narrative Card */}
                    <div className="md:col-span-8">
                        <Card className="h-full border-t-4 border-t-[#ecb100] shadow-2xl">
                            <div className="flex items-start gap-4 mb-6">
                                <Quote className="w-10 h-10 text-[#ecb100] opacity-50 flex-shrink-0" />
                                <div className="prose prose-lg max-w-none text-slate-700 font-serif leading-loose">
                                    <p className="itallic">{archetype.narrative}</p>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-2">
                                {archetype.values.map(val => (
                                    <span key={val} className="px-4 py-1.5 bg-slate-100 text-[#0f2e48] rounded-full text-sm font-bold tracking-wide border border-slate-200 uppercase">
                                        #{val}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Actions Sidebar */}
                    <div className="md:col-span-4 space-y-4">
                        <div className="bg-[#0f2e48] text-white p-6 rounded-2xl shadow-xl">
                            <h3 className="font-playfair text-xl font-bold mb-4 text-[#ecb100]">Tu Expedición</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#ecb100]">1</div>
                                    <span>Descarga tu guía PDF</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#ecb100]">2</div>
                                    <span>Explora el mapa interactivo</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#ecb100]">3</div>
                                    <span>Prepara tu mochila</span>
                                </li>
                            </ul>
                            <Button onClick={handleDownload} variant="secondary" className="w-full mt-6 gap-2">
                                <Download className="w-4 h-4" /> Bajar PDF Resumen
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Link href="/quiz" className="contents">
                                <Button variant="outline" className="w-full gap-2 text-xs">
                                    <RefreshCw className="w-3 h-3" /> Rehacer
                                </Button>
                            </Link>
                            <Link href="/responsible" className="contents">
                                <Button variant="ghost" className="w-full gap-2 text-xs">
                                    <BookOpen className="w-3 h-3" /> Normas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container mx-auto px-4 max-w-6xl py-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <MapIcon className="w-6 h-6 text-[#0f2e48]" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-playfair text-[#0f2e48]">Tu Mapa Recomendado</h2>
                        <p className="text-slate-500">Capas de interés basadas en el arquetipo {archetype.name}</p>
                    </div>
                </div>

                <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <NepalMap className="h-full w-full" />
                </div>
            </div>
        </div>
    );
}

export default function ResultPage() {
    return (
        <div className="min-h-screen bg-[#fdfbf7] flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-8 lg:px-16 max-w-screen-2xl">
                <Suspense fallback={<div className="p-20 text-center">Cargando...</div>}>
                    <ResultContent />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
