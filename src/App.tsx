import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Statistics } from './pages/Statistics';
import { Settings } from './pages/Settings';
import { TrafficSystemProvider } from './context/TrafficSystemContext';

function App() {
  return (
    <BrowserRouter>
      <TrafficSystemProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </TrafficSystemProvider>
    </BrowserRouter>
  );
}

export default App;