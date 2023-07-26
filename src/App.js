import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import usePreventZoom from './hooks';
import ScrollToTop from './utils/components/ScrollToTop';
import HomePage from './pages/Home';
import Layout from "./common/components/Layout";
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

function App() {
  usePreventZoom();
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </Layout>
      </ScrollToTop>
    </Router>
  );
}

export default App;
