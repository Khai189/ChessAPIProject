import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Request from "./components/Request";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Request />
  </StrictMode>,
)
