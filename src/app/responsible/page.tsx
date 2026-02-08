import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AlertCircle, Mountain, Trash2, Heart } from 'lucide-react';

export default function ResponsiblePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                    <AlertCircle className="text-amber-600" /> Normativa Responsable
                </h1>

                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-amber-500">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Mountain className="w-5 h-5" /> Permisos y Guías (TIMS)
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Desde 2023, Nepal ha hecho obligatorio el uso de guías certificados para la mayoría de las rutas de trekking.
                            Además, es necesario obtener la tarjeta TIMS (Trekkers' Information Management System) y los permisos de entrada a Áreas de Conservación (como ACAP) o Parques Nacionales.
                        </p>
                        <div className="bg-amber-50 p-4 rounded text-sm text-amber-800">
                            <strong>Fuente Oficial:</strong> Consulta siempre las actualizaciones en el sitio del <a href="https://ntb.gov.np" target="_blank" className="underline">Nepal Tourism Board</a>.
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-500">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Trash2 className="w-5 h-5" /> Gestión de Residuos
                        </h2>
                        <p className="text-gray-700 mb-4">
                            La regla de oro es "Leave No Trace" (No Dejar Rastro).
                            Lleva contigo toda tu basura hasta encontrar puntos de gestión adecuados en ciudades.
                            Evita plásticos de un solo uso; usa botellas rellenables y pastillas potabilizadoras.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5" /> Respeto Cultural
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Pide permiso antes de fotografiar personas o ceremonias.</li>
                            <li>Viste de manera respetuosa al entrar en templos y monasterios (hombros y rodillas cubiertos).</li>
                            <li>Camina siempre por el lado izquierdo de las estupas y muros mani (en sentido horario).</li>
                            <li>No toques cabezas de niños ni ofrezcas comida con la mano izquierda.</li>
                        </ul>
                    </section>

                    <div className="text-center text-sm text-gray-500 mt-12 bg-gray-100 p-4 rounded">
                        <p>
                            <strong>Disclaimer:</strong> Esta aplicación es una herramienta educativa.
                            La normativa local cambia frecuentemente. Verifica siempre con fuentes oficiales y tu agencia de viajes.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
