import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Products from './pages/Products.tsx'
import About from './pages/About.tsx'
import ProductDetail from './pages/ProductDetail.tsx'
import Admin from './pages/Admin.tsx'
import AdminLogin from './pages/AdminLogin.tsx'
import RequireAdmin from './components/RequireAdmin.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetail /> },
      { path: 'about', element: <About /> },
      { path: 'admin/login', element: <AdminLogin /> },
      { path: 'admin', element: <RequireAdmin><Admin /></RequireAdmin> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
