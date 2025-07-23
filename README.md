# PSP Reports

A React-based web application for generating comprehensive Mindset Assessment Reports for Premier Sport Psychology. This application creates detailed, printable reports for different types of athletes and staff members based on their psychological assessment results.

## Report Structure

Each report type includes:
- **Cover Page**: Professional branding with athlete/staff information
- **Mindset Assessment Overview**: Introduction to the assessment methodology
- **Cluster Overview**: Explanation of the assessment areas
- **Summary Page**: Overall results and percentile rankings
- **Individual Cluster Pages**: Detailed analysis of each assessment area including:
  - Percentile scores and interpretations
  - Personalized recommendations
  - Sport-specific guidance (where applicable)
  - Fun facts and research insights
- **Wrap-up Page**: Final thoughts and next steps

## URL Parameters

Reports are generated dynamically using URL parameters:
- `athleteName`: Name of the athlete/staff member
- `recordedDate`: Date of assessment
- `level`/`age`: Performance level or age
- `sport`: Sport type (for youth reports)
- `language`: Language preference (`en` or `es`)
- Cluster-specific percentiles and raw scores
- `reportOnly`: Set to `true` to hide metadata (default: `false`)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Example URL: http://localhost:3000/youth-golf?reportOnly=true&athleteName=Ruby%20Lee&recordedDate=2023-03-08T02%3A44%3A11.204Z&age=32&growthMindsetPercentile=60&selfConfidencePercentile=60&&teamCulturePercentile=50&healthBehaviorsPercentile=70&&growthMindsetScore=1.23&selfConfidenceScore=1.23&teamCultureScore=1.23&healthBehaviorsScore=1.23&language=en

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

**Important**: After building the application with `yarn build`, the contents of the `build` folder must be uploaded to the `psp-backend` repository in its `build` folder for changes to be deployed. The backend serves these static files to generate the reports.