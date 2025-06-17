import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WidgetProvider } from './context/WidgetContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage'; // Now this file exists
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Now this file exists
import LocalExpPage from './pages/LocalExpPage';
import LocalExpDetailPage from './pages/LocalExpDetailPage';

function App() {
  return (
    <WidgetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/local-exp" element={<LocalExpPage />} />
            <Route path="/local-exp/:slug" element={<LocalExpDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </WidgetProvider>
  );
}

export default App;