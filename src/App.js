import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import usePreventZoom from './hooks';
import ScrollToTop from './utils/components/ScrollToTop';
import HomePage from './pages/Home';
import Layout from "./common/components/Layout";

function App() {
  usePreventZoom();
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Layout>
      </ScrollToTop>
    </Router>
  );
}

export default App;
