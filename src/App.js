import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import NotFound from "./components/shared/not-Found/NotFound";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Footer />}>
        <Route path="register" element={<Register />} />
      </Route>
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
