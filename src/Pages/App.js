import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../styles/App/App.css";
import Home from './Home';
import Layout from '../Components/Layout/Layout';
import Projets from './Projets';
import Skills from './Skills'
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projets />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
