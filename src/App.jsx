import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/shared/footer/Footer";
import { NotFound } from "./components/shared/not-Found/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Footer />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;