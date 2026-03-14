export type MeasurementSystem = "metric" | "imperial";

export type MetricUnit = "g" | "kg" | "ml" | "l";
export type ImperialUnit = "oz" | "lb" | "tsp" | "tbsp" | "cup" | "fl-oz" | "pt" | "qt" | "gal";

export type Unit<T extends MeasurementSystem> = T extends 'metric' ? MetricUnit : ImperialUnit;

export type NoteType = "generic" | "warning" | "tip" | "substitution";

export interface Recipe<T extends MeasurementSystem = MeasurementSystem> {
    id: string;
    name: string;
    description: string;
    measurementSystem: T;
    ingredients: Ingredient<T>[];
    steps: Record<number, Step>;
    servings?: number;
    macros?: Macros
    prepTime?: TimeTotal;
    cookTime?: TimeTotal;
}

export interface Ingredient<T extends MeasurementSystem = MeasurementSystem> {
    id: string;
    name: string;
    quantity: number;
    unit?: Unit<T>;
    description?: string;
    notes: InternalNote[];
}

export interface Step {
    description: string;
    ingredientsUsed: Ingredient[];
}

export interface Macros {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
}

export interface TimeTotal {
    days?: number;
    hours?: number;
    minutes?: number;
}

export interface InternalNote {
    id: string;
    content: string;
    dateCreated: Date;
    dateModified: Date;
    type: NoteType;
}