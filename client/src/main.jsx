import { StrictMode } from 'react'

// Import React root creator
import { createRoot } from 'react-dom/client'

// Import global styles
import './index.css'

// Import main App component
import App from './App.jsx'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Render the React application inside the root element
createRoot(document.getElementById('root')).render(

  // StrictMode helps detect potential problems during development
  <StrictMode>

    {/* Main application component */}
    <App />

  </StrictMode>,
)