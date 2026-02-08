import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Using a standard font for now
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: "Himalaya Rutero - Ruta Inti 2026",
    description: "Descubre tu arquetipo y ruta recomendada para la expedición.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
            <body className="antialiased min-h-screen flex flex-col">{children}</body>
        </html>
    );
}
