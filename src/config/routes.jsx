import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as Components from "../components/index";
import * as Page from "../pages/index";

const RoutesAdmin = () => {
  return (
    <>
      <Components.NavAdmin />
      <Routes>
        <Route exact path="/" element={<Page.TransactionAdmin />} />
        <Route exact path="list-product" element={<Page.ListProduct />} />
        <Route exact path="add-product" element={<Page.AddProduct />} />
        <Route exact path="edit-product/:id" element={<Page.EditProduct />} />
        <Route exact path="complain" element={<Page.ComplainAdmin />} />
      </Routes>
    </>
  );
};

const RoutesUser = () => {
  const [cart, setCart] = useState([]);

  const handleClick = products => {
    if (cart.indexOf(products) !== -1) return;
    setCart([...cart, products]);
    console.log(cart);
  };

  const handleChange = (products, d) => {
    const ind = cart.indexOf(products);
    const arr = cart;
    arr[ind].length += d;
    console.log(arr);

    if (arr[ind].length === 0) arr[ind].length = 1;
    setCart([...cart]);
  };

  return (
    <>
      <Components.NavUser size={cart.length} />
      <Routes>
        <Route exact path="/" element={<Page.HomeCustomer />} />
        <Route
          exact
          path="product/:id"
          element={<Page.DetailProduct handleClick={handleClick} />}
        />
        <Route exact path="profile" element={<Page.Profile />} />
        <Route exact path="profile/add-profile" element={<Page.AddProfile />} />
        <Route exact path="complain" element={<Page.ComplainUser />} />
        <Route
          exact
          path="cart"
          element={
            <Page.Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </>
  );
};
export { RoutesAdmin, RoutesUser };
