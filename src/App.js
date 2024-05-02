import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import { Route,  Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Navbar />
      
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      
     

      </Routes>
    
    
      
    </>
  );
}

export default App;
