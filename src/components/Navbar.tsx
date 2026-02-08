import Link from 'next/link';
import { Compass, Map, BookOpen, AlertCircle } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="bg-blue-900 p-2 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                        <Compass className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-playfair font-bold text-2xl text-blue-900 tracking-tight">Himalaya Rutero</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/quiz" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors uppercase tracking-wider">
                        Test
                    </Link>
                    <Link href="/map" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors uppercase tracking-wider px-3 py-2 rounded-md hover:bg-slate-50">
                        <Map className="h-4 w-4" /> Mapa
                    </Link>
                    <Link href="/archetypes" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors uppercase tracking-wider px-3 py-2 rounded-md hover:bg-slate-50">
                        <BookOpen className="h-4 w-4" /> Arquetipos
                    </Link>
                    <Link href="/responsible" className="flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors uppercase tracking-wider bg-amber-50 px-4 py-2 rounded-full hover:bg-amber-100">
                        <AlertCircle className="h-4 w-4" /> Normativa
                    </Link>
                </div>
            </div>
        </nav>
    );
}
