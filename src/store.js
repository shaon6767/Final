import { configureStore } from '@reduxjs/toolkit'
import productSlice from './component/slice/productSlice'

export default configureStore({
  reducer: {
    product: productSlice
  }
})