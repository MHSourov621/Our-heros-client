import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1480px] mx-auto font-serif'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
