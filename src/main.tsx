
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './route/routes.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  
  <RouterProvider router={routes}/>
)
