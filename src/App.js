import { Routes, Route } from "react-router-dom";
import * as Page from "./pages/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Page.Home />} />
      <Route exact path="/product" element={<Page.DetailProduct />} />
      <Route exact path="/profile" element={<Page.Profile />} />
    </Routes>
  );
}

export default App;
