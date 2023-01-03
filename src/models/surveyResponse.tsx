export interface SurveyResponse {
   athleteName: string;
   email: string;
   recordedDate: string;
   level: string;
   clusterResults: ClusterResult[];
}

export interface ClusterResult {
   name: string;
   label: string;
   percentile: string;
}