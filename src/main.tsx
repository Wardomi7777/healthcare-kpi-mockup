import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GeneralDashboard from './pages/GeneralDashboard';
import EquipmentDashboard from './pages/EquipmentDashboard';
import WaitingListDashboard from './pages/WaitingListDashboard';
import FacilitiesMap from './pages/FacilitiesMap';
import AIRecommendations from './pages/AIRecommendations';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GeneralDashboard />} />
          <Route path="equipment" element={<EquipmentDashboard />} />
          <Route path="waiting-list" element={<WaitingListDashboard />} />
          <Route path="facilities-map" element={<FacilitiesMap />} />
          <Route path="ai-recommendations" element={<AIRecommendations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);