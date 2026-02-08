import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95";

    const variants = {
        primary: "bg-[#0f2e48] text-white hover:bg-[#1a4b70] shadow-lg hover:shadow-xl shadow-blue-900/20",
        secondary: "bg-[#ecb100] text-blue-900 hover:bg-[#ffc107] shadow-lg hover:shadow-xl shadow-amber-500/20 font-bold",
        outline: "border-2 border-slate-300 bg-transparent hover:border-[#0f2e48] hover:text-[#0f2e48] text-slate-600",
        ghost: "bg-transparent hover:bg-slate-100/50 text-slate-600 hover:text-slate-900",
        glass: "bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 shadow-lg"
    };

    const sizes = {
        sm: "h-9 px-4 text-xs tracking-wider uppercase",
        md: "h-11 px-6 text-sm tracking-wide",
        lg: "h-14 px-8 text-base tracking-wide font-semibold",
        xl: "h-16 px-10 text-lg tracking-wide font-bold",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
