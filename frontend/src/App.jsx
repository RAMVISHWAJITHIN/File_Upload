import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from './pages/Upload';
import SecureUpload from './pages/SecureUpload';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/secure-upload" element={<SecureUpload />} />
      </Routes>
    </Router>
  );
}

export default App;

