import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//theme
import "primereact/resources/themes/arya-purple/theme.css";
import 'primeflex/primeflex.css';
//core
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
