import { Routes, Route, useNavigate } from "react-router-dom";
import * as Page from "./pages/index";
import * as Configs from "./config/index";
import { useContext, useEffect } from "react";

if (localStorage.token) {
  Configs.setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(Configs.UserContext);

  useEffect(() => {
    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.status === "admin") {
        navigate("/admin");
      } else if (state.user.status === "customer") {
        navigate("/customer");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await Configs.API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Page.Home />} />
        <Route path="/customer/*" element={<Configs.RoutesUser />} />
        <Route path="/admin/*" element={<Configs.RoutesAdmin />} />
      </Routes>
    </>
  );
}

export default App;
