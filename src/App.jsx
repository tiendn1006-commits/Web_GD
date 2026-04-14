import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './features/Home/pages/LandingPage';
import './i18n/index.js';

function App() {
  return (
    <BrowserRouter basename="/Web_GD">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
