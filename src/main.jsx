import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./utils/i18n.js";

import App from './App.jsx'

import { appTheme } from "./appTheme.js";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
