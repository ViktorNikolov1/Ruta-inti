import { Question, AnswerOption, Theme, Archetype } from './types';
import archetypesData from '../data/archetypes/archetypes.es.json';

// Priority order for tie-breaking: Matches the implementation plan / user request cues
const TIE_BREAK_PRIORITY: Theme[] = [
    Theme.ODS,
    Theme.RESILIENCIA,
    Theme.BON,
    Theme.CORREDOR,
    Theme.ARTE,
    Theme.NACION
];

export function computeResult(questions: Question[], answers: Record<string, string>): Theme {
    const scores: Record<Theme, number> = {
        [Theme.CORREDOR]: 0,
        [Theme.NACION]: 0,
        [Theme.BON]: 0,
        [Theme.RESILIENCIA]: 0,
        [Theme.ARTE]: 0,
        [Theme.ODS]: 0,
    };

    const contributionCounts: Record<Theme, number> = {
        [Theme.CORREDOR]: 0,
        [Theme.NACION]: 0,
        [Theme.BON]: 0,
        [Theme.RESILIENCIA]: 0,
        [Theme.ARTE]: 0,
        [Theme.ODS]: 0,
    };

    // Calculate scores
    questions.forEach(q => {
        const answerId = answers[q.id];
        if (answerId) {
            const selectedOption = q.options.find(opt => opt.id === answerId);
            if (selectedOption && selectedOption.scores) {
                (Object.keys(selectedOption.scores) as Theme[]).forEach(theme => {
                    const score = selectedOption.scores[theme] || 0;
                    if (score > 0) {
                        scores[theme] += score;
                        contributionCounts[theme] += 1;
                    }
                });
            }
        }
    });

    // Find max score
    let maxScore = -1;
    let winningThemes: Theme[] = [];

    (Object.keys(scores) as Theme[]).forEach(theme => {
        if (scores[theme] > maxScore) {
            maxScore = scores[theme];
            winningThemes = [theme];
        } else if (scores[theme] === maxScore) {
            winningThemes.push(theme);
        }
    });

    if (winningThemes.length === 1) {
        return winningThemes[0];
    }

    // Tie-break 1: Most contributing questions
    let maxContributions = -1;
    let contributionWinners: Theme[] = [];

    winningThemes.forEach(theme => {
        if (contributionCounts[theme] > maxContributions) {
            maxContributions = contributionCounts[theme];
            contributionWinners = [theme];
        } else if (contributionCounts[theme] === maxContributions) {
            contributionWinners.push(theme);
        }
    });

    if (contributionWinners.length === 1) {
        return contributionWinners[0];
    }

    // Tie-break 2: Fixed priority
    for (const theme of TIE_BREAK_PRIORITY) {
        if (contributionWinners.includes(theme)) {
            return theme;
        }
    }

    return contributionWinners[0]; // Fallback
}

export function getArchetype(theme: Theme): Archetype | undefined {
    return (archetypesData as Archetype[]).find(a => a.id === theme);
}
