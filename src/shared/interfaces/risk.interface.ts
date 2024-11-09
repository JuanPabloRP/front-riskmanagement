// risk.interface.ts
export enum RiskType {
    Operational = 'Operational',
    Strategic = 'Strategic',
    Financial = 'Financial',
    Compliance = 'Compliance'
  }
  
  export interface Risks {
    id: number;               // ID único del riesgo
    name: string;             // Nombre o descripción del riesgo
    description?: string;     // Descripción detallada del riesgo (opcional)
    createdAt: string;        // Fecha de creación del riesgo en formato ISO
    updatedAt?: string;       // Fecha de última actualización del riesgo (opcional)
    severity: number;         // Nivel de severidad
    likelihood: number;       // Nivel de probabilidad de ocurrencia
    ownerId: number;          // ID del usuario responsable de este riesgo
    associatedPlansCount?: number; // Cantidad de planes de tratamiento asociados (opcional)
    type: RiskType;           // Tipo de riesgo
  }
  
  export type RiskList = Risks[];  // Definición de tipo para listas de riesgos
  