import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import archetypes from '@/data/archetypes/archetypes.es.json';

export default function ArchetypesPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Los 6 Arquetipos de Ruta Inti 2026</h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Cada arquetipo representa una forma única de interactuar con el Himalaya, alineada con los ejes temáticos de la expedición.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {archetypes.map((arch) => (
                        <Card key={arch.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold mb-2 text-gray-900">{arch.rpgPhrase}</h2>
                                <span className="inline-block px-2 py-1 bg-gray-100 text-xs font-semibold text-gray-500 rounded mb-4">
                                    {arch.name}
                                </span>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {arch.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {arch.values.slice(0, 3).map(val => (
                                        <span key={val} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                            {val}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <Link href={`/archetypes/${arch.id.toLowerCase()}`}>
                                    <Button variant="outline" className="w-full">
                                        Ver Detalle
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
