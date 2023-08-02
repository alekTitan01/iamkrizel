import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import usePreventZoom from './hooks';
import ScrollToTop from './utils/components/ScrollToTop';
import HomePage from './pages/Home';
import Layout from "./common/components/Layout";
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

// Styles
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  usePreventZoom();
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Routes>
            <Route path='/iamkrizel' element={<HomePage />} />
            <Route path='/iamkrizel/about' element={<About />} />
            <Route path='/iamkrizel/services' element={<Services />} />
            <Route path='/iamkrizel/portfolio' element={<Portfolio />} />
          </Routes>
        </Layout>
      </ScrollToTop>
    </Router>
  );
}

export default App;
