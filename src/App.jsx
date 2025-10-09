import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./component/root/RootLayout"
import AllProduct from "./pages/AllProduct"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderComplete from "./pages/OrderComplete"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/allproduct" element={<AllProduct/>}></Route>
    <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/ordercomplete" element={<OrderComplete/>}></Route>
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
