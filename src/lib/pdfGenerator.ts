import jsPDF from 'jspdf';
import { Archetype, RouteCard } from './types';

export const generatePDF = (archetype: Archetype, route: RouteCard | undefined, participantId: string = 'Participant-XXXX') => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(41, 128, 185); // Blue
    doc.text("Himalaya Rutero - Ruta Inti 2026", 20, 20);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`ID: ${participantId} | Fecha: ${date}`, 20, 28);

    doc.line(20, 32, 190, 32);

    // Archetype Title
    doc.setFontSize(18);
    doc.setTextColor(0);
    doc.text(archetype.rpgPhrase, 20, 45);

    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text(archetype.description, 20, 52, { maxWidth: 170 });

    // Narrative
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("Narrativa", 20, 70);

    doc.setFontSize(11);
    const narrativeLines = doc.splitTextToSize(archetype.narrative, 170);
    doc.text(narrativeLines, 20, 80);

    let yPos = 80 + (narrativeLines.length * 5) + 10;

    // Values
    doc.setFontSize(14);
    doc.text("Valores Clave", 20, yPos);
    doc.setFontSize(11);
    doc.text(archetype.values.join(" • "), 20, yPos + 8);

    yPos += 20;

    // Route Highlights
    if (route) {
        doc.setFontSize(14);
        doc.text("Itinerario Recomendado", 20, yPos);
        yPos += 8;

        doc.setFontSize(11);
        route.highlights.forEach(h => {
            doc.text(`• ${h}`, 25, yPos);
            yPos += 6;
        });

        yPos += 5;
        doc.setFont("helvetica", "bold");
        doc.setTextColor(200, 0, 0);
        doc.text(`Nota: ${route.caution}`, 20, yPos);
    }

    // Footer
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150);
    doc.setFontSize(9);
    doc.text("Este documento es educativo y no sustituye normativa oficial.", 105, 280, { align: "center" });

    doc.save(`HimalayaRutero_${archetype.id}.pdf`);
};
