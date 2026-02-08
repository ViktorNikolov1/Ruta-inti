'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/Card';
import { BookOpen } from 'lucide-react';
import { Archetype, RouteCard, MicroLesson } from '@/lib/types';

const NepalMap = dynamic(() => import('@/components/map/NepalMap'), { ssr: false });

interface ArchetypeDetailClientProps {
    archetype: Archetype;
    routeCard?: RouteCard;
    microlessons: MicroLesson[];
}

export function ArchetypeDetailClient({ archetype, routeCard, microlessons }: ArchetypeDetailClientProps) {
    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Narrative & Values */}
            <div className="lg:col-span-2 space-y-8">
                <Card title="Narrativa">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {archetype.narrative}
                    </p>
                </Card>

                <Card title="Valores Clave">
                    <div className="flex flex-wrap gap-3">
                        {archetype.values.map(val => (
                            <span key={val} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {val}
                            </span>
                        ))}
                    </div>
                </Card>

                {routeCard && (
                    <Card title="Puntos Destacados de la Ruta" className="border-l-4 border-l-green-500">
                        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                            {routeCard.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                        <div className="bg-amber-50 p-4 rounded text-sm text-amber-800 flex gap-2 items-start">
                            <span className="font-bold">Nota:</span> {routeCard.caution}
                        </div>
                    </Card>
                )}
            </div>

            {/* Right Column: Micro-lessons & Map */}
            <div className="space-y-8">
                <div className="h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                    <NepalMap className="h-full w-full" activeLayers={routeCard?.mapLayerIds} />
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" /> Micro-lecciones
                    </h3>
                    {microlessons.map((lesson: any) => (
                        <Card key={lesson.id} className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                            <h4 className="font-bold text-gray-800 mb-2">{lesson.title}</h4>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                                {lesson.content}
                            </p>
                            <span className="text-xs text-blue-500 font-medium">Fuente: {lesson.source}</span>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
