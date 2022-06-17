import React from "react";
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
        <Route exact path="edit-product" element={<Page.EditProduct />} />
        <Route exact path="complain" element={<Page.ComplainAdmin />} />
      </Routes>
    </>
  );
};

const RoutesUser = () => {
  return (
    <>
      <Components.NavUser />
      <Routes>
        <Route exact path="/" element={<Page.HomeCustomer />} />
        <Route exact path="product/:id" element={<Page.DetailProduct />} />
        <Route exact path="profile" element={<Page.Profile />} />
        <Route exact path="complain" element={<Page.ComplainUser />} />
        <Route exact path="cart" element={<Page.Cart />} />
      </Routes>
    </>
  );
};
export { RoutesAdmin, RoutesUser };
