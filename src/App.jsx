import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Routers from "./components/routers/Routers";
import { history } from "./helpers/HistoryHelper";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
