'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import questions from '@/data/quiz/questions.es.json';
import { computeResult } from '@/lib/quizEngine';
import { Question } from '@/lib/types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function QuizFlow() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isTransitioning, setIsTransitioning] = useState(false);

    const quizQuestions = questions as unknown as Question[];
    const currentQuestion = quizQuestions[currentIndex];

    const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

    const handleOptionSelect = (optionId: string) => {
        setIsTransitioning(true);

        // Add small delay for visual feedback
        setTimeout(() => {
            const newAnswers = { ...answers, [currentQuestion.id]: optionId };
            setAnswers(newAnswers);

            if (currentIndex < quizQuestions.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setIsTransitioning(false);
            } else {
                finishQuiz(newAnswers);
            }
        }, 400);
    };

    const finishQuiz = (finalAnswers: Record<string, string>) => {
        const resultTheme = computeResult(quizQuestions, finalAnswers);
        if (typeof window !== 'undefined') {
            localStorage.setItem('himalaya_quiz_answers', JSON.stringify(finalAnswers));
            localStorage.setItem('himalaya_result_theme', resultTheme);
        }
        router.push(`/result?theme=${resultTheme}`);
    };

    return (
        <div className="max-w-3xl mx-auto w-full px-4">
            {/* Progress Header */}
            <div className="mb-12 sticky top-24 bg-[#fdfbf7]/95 backdrop-blur-sm pt-4 pb-4 z-10 transition-all">
                <div className="flex justify-between items-end mb-3">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        Pregunta {currentIndex < 9 ? `0${currentIndex + 1}` : currentIndex + 1} <span className="text-slate-300">/ {quizQuestions.length}</span>
                    </span>
                    <span className="text-2xl font-playfair text-[#0f2e48] font-bold">{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-slate-200 w-full rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#ecb100] transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(236,177,0,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className={`transition-all duration-500 ease-in-out transform ${isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#0f2e48] leading-tight font-playfair">
                    {currentQuestion.text}
                </h2>

                <div className="grid gap-4">
                    {currentQuestion.options.map((option, idx) => {
                        const isSelected = answers[currentQuestion.id] === option.id;
                        return (
                            <button
                                key={option.id}
                                onClick={() => handleOptionSelect(option.id)}
                                className={`
                    w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden
                    ${isSelected
                                        ? 'border-[#0f2e48] bg-[#0f2e48] text-white shadow-xl scale-[1.02]'
                                        : 'border-slate-200 bg-white hover:border-[#ecb100] hover:shadow-lg hover:bg-amber-50/30'
                                    }
                  `}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <span className={`text-lg font-medium pr-8 ${isSelected ? 'text-white' : 'text-slate-700 group-hover:text-[#0f2e48]'}`}>
                                        {option.text}
                                    </span>
                                    {isSelected && <CheckCircle2 className="w-6 h-6 text-[#ecb100] animate-bounce" />}
                                    {!isSelected && <ArrowRight className="w-5 h-5 text-slate-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 flex justify-between items-center border-t border-slate-200 pt-8">
                <Button
                    variant="ghost"
                    onClick={() => {
                        if (currentIndex > 0) {
                            setIsTransitioning(true);
                            setTimeout(() => {
                                setCurrentIndex(prev => prev - 1);
                                setIsTransitioning(false);
                            }, 300);
                        }
                    }}
                    disabled={currentIndex === 0 || isTransitioning}
                    className="text-slate-400 hover:text-[#0f2e48]"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
                </Button>
            </div>
        </div>
    );
}
