import { Routes, Route } from "react-router-dom";
import * as Page from "./pages/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Page.Home />} />
      <Route exact path="/product" element={<Page.DetailProduct />} />
      <Route exact path="/profile" element={<Page.Profile />} />
      <Route exact path="/cart" element={<Page.Cart />} />
      <Route exact path="/complain" element={<Page.ComplainUser />} />
      <Route exact path="/admin" element={<Page.TransactionAdmin />} />
      <Route exact path="/list-product" element={<Page.ListProduct />} />
      <Route exact path="/edit-product" element={<Page.EditProduct />} />
      <Route exact path="/add-product" element={<Page.AddProduct />} />
    </Routes>
  );
}

export default App;
