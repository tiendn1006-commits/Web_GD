import { BrowserRouter, Routes, Route } from 'react-router-dom';

function TestApp() {
  return (
    <BrowserRouter basename="/Web_GD">
      <div style={{ padding: '20px', background: 'white', minHeight: '100vh' }}>
        <h1 style={{ color: 'black', fontSize: '32px' }}>Test Page - React is Working!</h1>
        <p style={{ color: 'black' }}>If you see this, React Router is working.</p>
        <Routes>
          <Route path="/" element={<div style={{ color: 'green' }}>Home Route Working!</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default TestApp;
