import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/shared/not-Found/NotFound";
import Register from "./components/app/auth/register/Register";
import Layout from "./components/shared/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="auth" element={<Auth />}>
          </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
