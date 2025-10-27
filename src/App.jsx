import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./component/root/RootLayout"
import AllProduct from "./pages/AllProduct"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderComplete from "./pages/OrderComplete"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

let router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/allproduct" element={<AllProduct/>}></Route>
    <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/ordercomplete" element={<OrderComplete/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
   <Route path="/*" element={<Error/>}></Route>
  </>
))

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
