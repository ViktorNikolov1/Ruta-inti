export enum Theme {
    CORREDOR = "CORREDOR",
    NACION = "NACION",
    BON = "BON",
    RESILIENCIA = "RESILIENCIA",
    ARTE = "ARTE",
    ODS = "ODS",
}

export interface AnswerOption {
    id: string;
    text: string;
    scores: Partial<Record<Theme, number>>;
}

export interface Question {
    id: string;
    text: string;
    options: AnswerOption[];
}

export interface Archetype {
    id: Theme;
    name: string;
    description: string;
    narrative: string;
    values: string[];
    rpgPhrase: string; // "El Cartógrafo del Corredor"
    itineraryLayers: {
        culture: string[];
        spirituality: string[];
        resilience: string[];
        art: string[];
        sustainability: string[];
    };
}

export interface RouteCard {
    theme: Theme;
    highlights: string[];
    caution: string; // Responsible travel note
    mapLayerIds: string[]; // IDs to toggle on map
}

export interface MicroLesson {
    id: string;
    title: string;
    content: string; // Short text 80-120 words
    source: string; // Citation
}

export interface VerificationSource {
    id: string;
    organization: string;
    url: string;
    type: "Dataset" | "Report" | "Article" | "Map";
    license?: string;
    description: string;
}

export interface GeoJSONFeatureProperties {
    id: string;
    name: string;
    description: string;
    layerType: "UNESCO" | "TREK" | "ITINERARY" | "BIODIVERSITY" | "RISK";
    sourceId: string;
    recommendedThemes?: Theme[];
}
