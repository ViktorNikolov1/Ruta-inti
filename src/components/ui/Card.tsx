import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    variant?: 'default' | 'glass' | 'flat';
}

export function Card({ children, className = '', title, variant = 'default' }: CardProps) {
    const variants = {
        default: "bg-white shadow-xl shadow-slate-200/50 border border-slate-100",
        glass: "bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl",
        flat: "bg-slate-50 border border-slate-200"
    };

    return (
        <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${variants[variant]} ${className}`}>
            {title && (
                <div className="px-8 py-5 border-b border-gray-100/50 bg-gray-50/30 backdrop-blur-sm flex items-center justify-between">
                    <h3 className="font-playfair font-bold text-lg text-[#0f2e48]">{title}</h3>
                    {/* Decorative dot */}
                    <div className="w-2 h-2 rounded-full bg-[#ecb100]"></div>
                </div>
            )}
            <div className="p-8">
                {children}
            </div>
        </div>
    );
}
