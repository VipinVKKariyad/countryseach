import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Countries from './Countries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countries/>
  </StrictMode>,
)
