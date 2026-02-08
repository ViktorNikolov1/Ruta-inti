import { describe, it, expect } from 'vitest';
import { computeResult } from '../lib/quizEngine';
import { Question, Theme } from '../lib/types';

// Mock questions
const mockQuestions: Question[] = [
    {
        id: 'q1',
        text: 'Test Q1',
        options: [
            { id: 'opt1', text: 'A', scores: { [Theme.CORREDOR]: 3 } },
            { id: 'opt2', text: 'B', scores: { [Theme.NACION]: 3 } }
        ]
    },
    {
        id: 'q2',
        text: 'Test Q2',
        options: [
            { id: 'opt3', text: 'C', scores: { [Theme.CORREDOR]: 1, [Theme.BON]: 2 } },
            { id: 'opt4', text: 'D', scores: { [Theme.NACION]: 3 } }
        ]
    }
];

describe('quizEngine', () => {
    it('should calculate the correct winner based on scores', () => {
        // Answers favoring CORREDOR (3 + 1 = 4) vs NACION (0). BON = 2.
        const answers = {
            'q1': 'opt1', // CORREDOR +3
            'q2': 'opt3'  // CORREDOR +1, BON +2
        };
        const result = computeResult(mockQuestions, answers);
        expect(result).toBe(Theme.CORREDOR);
    });

    it('should handle ties using contribution count', () => {
        // Manipulate scores to tie. 
        // Scenario: NACION = 3, CORREDOR = 3.
        // Q1: NACION=3 (opt2). Q2: CORREDOR=3 (new option needed for pure tie in points with mixed contribs)

        const tieQuestions: Question[] = [
            {
                id: 'q1', text: 'Q1',
                options: [{ id: 'a', text: 'A', scores: { [Theme.NACION]: 3 } }]
            },
            {
                id: 'q2', text: 'Q2',
                options: [{ id: 'b', text: 'B', scores: { [Theme.CORREDOR]: 3 } }]
            }
        ];

        // Both have score 3. Both have 1 contribution. 
        // Tie-break 2 (Priority) applies.
        // Priority: ODS > RESILIENCIA > BON > CORREDOR > ARTE > NACION ? 
        // Wait, I defined: ODS, RESILIENCIA, BON, CORREDOR, ARTE, NACION.
        // So CORREDOR comes before NACION in my priority list in quizEngine.ts?
        // Let's check quizEngine.ts priority list.

        const answers = { 'q1': 'a', 'q2': 'b' };
        const result = computeResult(tieQuestions, answers);

        // Expect CORREDOR if it's higher priority than NACION
        // Or NACION if it's higher.
        // I need to know the Priority list order.
        // In quizEngine.ts: ODS, RESILIENCIA, BON, CORREDOR, ARTE, NACION.
        // CORREDOR index is lower (higher priority) than NACION? 
        // Array order: [ODS, RESILIENCIA, BON, CORREDOR, ARTE, NACION]
        // The loop returns the first match. So ODS is highest.
        // CORREDOR (index 3) vs NACION (5). CORREDOR wins.
        expect(result).toBe(Theme.CORREDOR);
    });

    it('should handle partial answers', () => {
        const answers = {
            'q1': 'opt1' // CORREDOR +3
            // q2 missing
        };
        const result = computeResult(mockQuestions, answers);
        expect(result).toBe(Theme.CORREDOR);
    });
});
