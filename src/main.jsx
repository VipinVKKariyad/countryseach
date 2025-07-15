import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Countries from './countries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countries/>
  </StrictMode>,
)
