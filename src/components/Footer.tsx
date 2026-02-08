import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Proyecto</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Herramienta educativa para Ruta Inti 2026. Ayudando a expedicionarios a encontrar su camino en el Himalaya.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Enlaces</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/sources" className="hover:text-blue-600">Fuentes y Licencias</Link></li>
                            <li><Link href="/responsible" className="hover:text-blue-600">Normativa Responsable</Link></li>
                            <li><Link href="/map" className="hover:text-blue-600">Mapa Interactivo</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Legal</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Esta aplicación es un proyecto educativo y NO representa una agencia de viajes oficial.
                            No sustituye el asesoramiento de guías profesionales ni autoridades locales.
                            Identificador: {process.env.NEXT_PUBLIC_PARTICIPANT_ID || 'Participant-DEMO'}
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
                    Built with Next.js & MapLibre. Data from OpenStreetMap, UNESCO & USGS.
                </div>
            </div>
        </footer>
    );
}
