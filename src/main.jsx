import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieFetchData } from './components/MovieFetchData.jsx'

createRoot(document.getElementById('root')).render(
    <MovieFetchData>
      <App />
    </MovieFetchData>
)
