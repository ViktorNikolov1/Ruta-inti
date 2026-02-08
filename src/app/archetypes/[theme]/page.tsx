import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import archetypes from '@/data/archetypes/archetypes.es.json';
import { Theme, Archetype } from '@/lib/types';
import routes from '@/data/routes/routes.es.json';
import { ArchetypeDetailClient } from '@/components/archetypes/ArchetypeDetailClient';

// Statically generate parameters for all themes
export function generateStaticParams() {
    return archetypes.map((arch) => ({
        theme: arch.id.toLowerCase(),
    }));
}

export default async function ArchetypeDetail({ params }: { params: Promise<{ theme: string }> }) {
    const { theme } = await params;
    const archetype = archetypes.find((a) => a.id.toLowerCase() === theme.toLowerCase()) as Archetype | undefined;

    if (!archetype) {
        notFound();
    }

    const routeCard = routes.find(r => r.theme === archetype.id) as unknown as RouteCard | undefined;
    const microlessons = require(`@/data/microlessons/${archetype.id}.es.json`);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                        {archetype.name}
                    </span>
                    <h1 className="text-4xl font-bold mt-4 mb-6 text-gray-900">{archetype.rpgPhrase}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {archetype.description}
                    </p>
                </div>

                <ArchetypeDetailClient
                    archetype={archetype}
                    routeCard={routeCard}
                    microlessons={microlessons}
                />
            </main>
            <Footer />
        </div>
    );
}
