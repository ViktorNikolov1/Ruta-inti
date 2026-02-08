import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import sources from '@/data/sources/sources.json';
import { ExternalLink } from 'lucide-react';

export default function SourcesPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">Fuentes y Licencias</h1>
                <p className="text-gray-600 mb-8">
                    La información presentada en esta aplicación proviene de fuentes públicas y oficiales.
                    Agradecemos a las organizaciones que hacen accesibles sus datos para fines educativos.
                </p>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700">Organización</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Tipo</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Descripción</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Enlace</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sources.map((src) => (
                                <tr key={src.id} className="hover:bg-gray-50/50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{src.organization}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 bg-gray-50 rounded m-2 inline-block w-auto">{src.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{src.description}</td>
                                    <td className="px-6 py-4">
                                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                            Ver <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 p-6 bg-slate-100 rounded-xl">
                    <h3 className="font-bold mb-2">Licencias de Datos</h3>
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>OpenStreetMap:</strong> Datos del mapa © Colaboradores de OpenStreetMap, disponibles bajo la Licencia Open Database (ODbL).
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Contenidos de Texto:</strong> Los textos narrativos son originales creados para este proyecto educativo, inspirados en hechos históricos y culturales públicos.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
