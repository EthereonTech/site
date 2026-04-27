import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sobre-nos",
        element: <About />,
      },
      {
        path: "servicos",
        element: <Services />,
      },
      {
        path: "contato",
        element: <Contact />,
      },
      {
        path: "produtos/:productId",
        element: <Products />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
