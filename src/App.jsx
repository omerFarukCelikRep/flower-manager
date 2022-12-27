import "./App.css";
import { Routers } from "./components/routers/Routers";


function App(){
  return (
    <>
      <Routers />    
    </>
    // <Routes>
    //   <Route path="/" element={<Footer />} />
    //   <Route path="register" element={<Register />} />
    //   <Route exact path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;
