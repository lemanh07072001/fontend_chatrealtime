import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import Router from "./routes/routes"
import { store } from './redux/store/store';
import { Provider } from 'react-redux'

import './index.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>

      <RouterProvider router={Router} />

    </StrictMode>
  </Provider>
)
