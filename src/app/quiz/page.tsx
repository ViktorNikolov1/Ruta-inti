import { Navbar } from '@/components/Navbar';
import QuizFlow from '@/components/quiz/QuizFlow';

export default function QuizPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
                    Descubre tu Arquetipo
                </h1>
                <p className="text-center text-gray-600 mb-10 max-w-lg mx-auto">
                    Responde con honestidad. No hay respuestas correctas, solo caminos diferentes.
                </p>
                <QuizFlow />
            </main>
        </div>
    );
}
