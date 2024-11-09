import { ThreatCategory, ImpactLevel, Probability } from "../enums/threats.enum";

export interface ThreatType {
    id?: string;
    id_registro: string;
    name: string;
    description: string;
    source: string;
    category: ThreatCategory;
    impactLevel: ImpactLevel;
    probability: Probability;
    affectedAssets: string[];
    createdAt?: Date;
    updatedAt?: Date;
    createdBy: string;
    status: 'active' | 'archived';
  }