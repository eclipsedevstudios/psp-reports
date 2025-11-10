import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MindsetReportAdult from './MindsetReportAdult';
import MindsetReportStaff from './MindsetReportStaff';
import MindsetReportYouth from './MindsetReportYouth';
import MindsetReportYouthGolf from './MindsetReportYouthGolf';
import MindsetBalanceReport from './MindsetBalanceReport';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<MindsetReportAdult />} />
        <Route path="/youth" element={<MindsetReportYouth />} />
        <Route path="/youth-golf" element={<MindsetReportYouthGolf />} />
        <Route path="/staff" element={<MindsetReportStaff />} />
        <Route path="/mindset" element={<MindsetBalanceReport />} />
    </Routes>
    </Router>
  );
}
export default App;
