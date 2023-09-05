import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../styles/App/App.css";
import Home from './Home';
import Layout from '../Components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
