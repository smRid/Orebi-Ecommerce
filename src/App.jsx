import React from "react";
import Home from "./components/page/Home";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layer/RootLayout";
import Product from "./components/page/Product";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>} ></Route>
        <Route path="/products"  element={<Product/>} ></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
