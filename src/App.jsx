import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import SignUp from "./component/signup/Signup";
import Wishlist from "./component/wishlist/Wishlist";
import Login from "./component/login/login";
import ProductsOfCategory from "./component/productsOfCategory/ProductsOfCategory";
import NotFound from "./component/error404/notfound";
import Checkout from "./component/checkout/checkout";
import Account from './component/account/account'; 
import Products from "./component/products/Products";
import FlashSales from "./component/flashSales/FlashSales";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import AdminDashboard from "./component/adminDashboard/AdminDashboard";




const App = () => {
 
   
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },

        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },

        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "/ProductsOfCategory",
          element: <ProductsOfCategory />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/admin",
          element: <AdminDashboard />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
