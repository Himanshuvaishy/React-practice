import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Props from './props.jsx'

createRoot(document.getElementById('root')).render(
  
    // <App />
    <Props user={{ name:"Himanshu" ,age:20}}/>
 
)
