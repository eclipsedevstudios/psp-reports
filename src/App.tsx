import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MindsetReportAdult from './MindsetReportAdult';
import MindsetReportYouth from './MindsetReportYouth';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<MindsetReportAdult />} />
        <Route path="/youth" element={<MindsetReportYouth />} />
    </Routes>
    </Router>
  );
}
export default App;
