import { configureStore } from '@reduxjs/toolkit'
import breadCrumbs from './slices/breadCrumbs'
import addToCart from './slices/addToCart'


export default configureStore({
  reducer: {
    breadcrumb:breadCrumbs,
    cartItem:addToCart
    

  },
})