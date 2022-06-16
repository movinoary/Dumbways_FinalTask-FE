import { Routes, Route } from "react-router-dom";
import * as Page from "./pages/index";
import * as Config from "./config/index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Page.Home />} />
        <Route path="/customer/*" element={<Config.RoutesUser />} />
        <Route path="/admin/*" element={<Config.RoutesAdmin />} />
      </Routes>
    </>
  );
}

export default App;
