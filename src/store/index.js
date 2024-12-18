import { combineReducers} from 'redux'
import productsSlice from './productsSlice'
import cartSlice, {

} from './CartSlice'
import wishListSlice, {

} from './wishListSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer:{
  products: productsSlice,
  cartItems: cartSlice,
  wishList: wishListSlice,
}})

