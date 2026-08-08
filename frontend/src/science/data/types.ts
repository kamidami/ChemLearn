export type ScienceEntityId = string;

export type PhysicalState =
  | "solid"
  | "liquid"
  | "gas"
  | "aqueous"
  | "plasma";

export interface ElementDefinition {
  readonly id: ScienceEntityId;
  readonly name: string;
  readonly symbol: string;
  readonly atomicNumber: number;
  readonly relativeAtomicMass: number;
}

export interface ChemicalDefinition {
  readonly id: ScienceEntityId;
  readonly name: string;
  readonly formula: string;
  readonly defaultState: PhysicalState;
}