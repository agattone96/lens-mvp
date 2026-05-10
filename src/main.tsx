import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure the root element exists before attempting to render
const container = document.getElementById('root');

if (!container) {
  throw new Error(
    "LENS System Error: Critical failure mounting application. 'root' element not found in DOM."
  );
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);