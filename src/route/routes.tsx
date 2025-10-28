import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductsPage from "../pages/ProductsPage";
import PrivatePolicyPage from "../pages/PrivatePolicyPage";
import ProductDetail from "../components/productDetail/ProductDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/about-us",element: <AboutUsPage />},
      {path: "/product",element: <ProductsPage />},
      {path: "/productDetail/:productId",element: <ProductDetail />},
      {path: "/contact-us",element: <ContactUs />},
      {path: "/privacy-policy",element: <PrivatePolicyPage />},
    ],
  },
]);

export default routes;

