'use client';

import { Navbar } from '@/components/Navbar';
import dynamic from 'next/dynamic';

const NepalMap = dynamic(() => import('@/components/map/NepalMap'), { ssr: false });

export default function MapPage() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 relative">
                <NepalMap className="absolute inset-0 w-full h-full" initialZoom={7} />

                {/* Overlay Controls (Simple placeholder) */}
                <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10 max-w-xs">
                    <h3 className="font-bold mb-2">Capas del Mapa</h3>
                    <div className="space-y-2 text-sm">
                        <label className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span> UNESCO
                        </label>
                        <label className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span> Trekking
                        </label>
                        <label className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span> Riesgos
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
