export enum BrocketMatchKind {
  'BO1' = 1,
  'BO3' = 3,
  'BO5' = 5
}

export enum BrocketGameKind {
  'SingleElimination'= 'single-elimination',
  'DoubleElimination' = 'double-elimination',
}

export interface BrocketMatch  {
  teams: [BrocketTeam, BrocketTeam];
  predecessor?: BrocketMatch;
  successor?: BrocketMatch;
  kind: BrocketMatchKind;
}

export interface BrocketTeam  {
  name: string;
  tag?: string;
  imageUrl?: string;
}

export interface BrocketGame {
  name: string;
  imageUrl?: string;
  kind: BrocketGameKind;
  hasThirdPlaceMatch?: boolean;
  matches: BrocketMatch[];
}
