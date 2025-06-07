import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoleContextProvider from './components/RoleContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoleContextProvider>
      <App />
    </RoleContextProvider>
  </StrictMode>,
)
