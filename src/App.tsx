import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MindsetReportAdult from './MindsetReportAdult';
import MindsetReportStaff from './MindsetReportStaff';
import MindsetReportYouth from './MindsetReportYouth';
import MindsetReportYouthGolf from './MindsetReportYouthGolf';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<MindsetReportAdult />} />
        <Route path="/youth" element={<MindsetReportYouth />} />
        <Route path="/youth-golf" element={<MindsetReportYouthGolf />} />
        <Route path="/staff" element={<MindsetReportStaff />} />
    </Routes>
    </Router>
  );
}
export default App;
