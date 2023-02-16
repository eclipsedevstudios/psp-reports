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