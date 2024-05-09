import { Language } from "../types";

export interface AdultSurveyResponse {
   athleteName: string;
   recordedDate: string;
   level: string;
   clusterResults: AdultClusterResult[];
   language: Language;
}

export interface YouthSurveyResponse {
   athleteName: string;
   recordedDate: string;
   age: string;
   clusterResults: YouthClusterResult[];
   language: Language;
   sport: string;
}

export interface AdultClusterResult {
   name: string;
   label: string;
   percentile: string;
   percentileCollege: string;
   percentilePro: string;
   rawScore: string;
}

export interface YouthClusterResult {
   name: string;
   label: string;
   percentile: string;
   rawScore: string;
}

// NB: These strings come directly from the Qualtrics survey
export enum AthleteLevel {
   Olympic = 'Olympic and/or National team',
   Professional = 'Professional',
   Collegiate = 'Collegiate',
   HighSchool = 'High School or Youth Recreational/Club',
   SemiProfessional = 'Semi-Professional or Adult Amateur',
   AdultRecreational = 'Adult Recreational (18 and older)',
}