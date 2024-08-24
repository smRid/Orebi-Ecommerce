import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import RootLayouts from './components/RootLayouts'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import ContactsPage from './pages/ContactsPage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import MyAccountPage from './pages/MyAccountPage'
import CartPage from './pages/CartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<RootLayouts />}>
         <Route
             path="/"
             element={<HomePage />}
         ></Route>

          <Route
             path="/products"
             element={<ProductsPage />}
         ></Route>
          <Route
             path="/product"
             element={<ProductDetailsPage />}
         ></Route>

          <Route
              path="/about"
              element={<AboutPage />}
          ></Route>

          <Route
              path="/contacts"
              element={<ContactsPage />}
          ></Route>
          
          <Route
              path="/login"
              element={<LoginPage />}
          ></Route>

          <Route
             path="/sign-up"
             element={<SignupPage />}
         ></Route>

          <Route
             path="/my-account"
             element={<MyAccountPage />}
         ></Route>
          <Route
             path="/cart"
             element={<CartPage />}
         ></Route>

         <Route
             path="/checkout"
             element={<CheckoutPage />}
         ></Route>
         <Route
             path="*"
             element={<ErrorPage />}
         ></Route>
    </Route>
   
   </>
  )
);

export default function App() {

 
  return (
   <>
   <RouterProvider router={router} />
    </>
  )
}
