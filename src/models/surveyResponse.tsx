export interface SurveyResponse {
   athleteName: string;
   recordedDate: string;
   level: string;
   clusterResults: ClusterResult[];
}

export interface ClusterResult {
   name: string;
   label: string;
   percentile: string;
   percentileCollege: string;
   percentilePro: string;
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