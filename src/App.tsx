import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Footer-only page, so it is split out of the main bundle.
const DesignPage = lazy(() => import('./pages/DesignPage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/design"
          element={
            <Suspense fallback={null}>
              <DesignPage />
            </Suspense>
          }
        />
        {/* Includes the old /projects page, which is gone. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
