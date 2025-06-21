import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { WidgetProvider } from './context/WidgetContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LocalExpPage from './pages/LocalExpPage';
import LocalExpDetailPage from './pages/LocalExpDetailPage';
import BestHotelsPage from './pages/BestHotelsPage';

function App() {
  return (
    <WidgetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/best-hotels" element={<BestHotelsPage />} />
            <Route path="/local-exp" element={<LocalExpPage />} />
            <Route path="/local-exp/:slug" element={<LocalExpDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </WidgetProvider>
  );
}

export default App;