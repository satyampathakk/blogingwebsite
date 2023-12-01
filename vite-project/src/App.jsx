import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SubmitForm from './layouts/SubmitForm';
import AboutLayout from './layouts/AboutLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:pk" element={<Layout></Layout>} />
        <Route path="/about" element={<AboutLayout></AboutLayout>} />
        <Route path="/submitform" element={<SubmitForm></SubmitForm>} />
        
      </Routes>
    </Router>
  );
}

export default App;
