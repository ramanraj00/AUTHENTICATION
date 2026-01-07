import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./auth.jsx"
import Lam from "./suck.jsx"

const App = () => {

   return  <div>

     <BrowserRouter>

        <Routes>

  <Route path="/" element={<Auth />} />
  <Route path="/lam" element={<Lam/>}/>

        </Routes>
      
    </BrowserRouter>

     </div>


}

export default App