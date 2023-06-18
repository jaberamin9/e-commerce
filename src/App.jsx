import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import SingelProduct from "./pages/singel_product/SingelProduct";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: function () {
        return fetch(`http://localhost:3000/product-by-type`);
      }
    },
    {
      path: "/category",
      element: <Product></Product>,
      loader: function () {
        return fetch(`http://localhost:3000/all-category`);
      }
    },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path: "/cart",
      element: <Cart></Cart>
    },
    {
      path: "/product-detail/:id",
      element: <SingelProduct></SingelProduct>,
      loader: function ({ params }) {
        return fetch(`http://localhost:3000/product-detail/${params.id}`);
      }
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
