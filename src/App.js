import Contact from "./components/layerComponents/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/layerComponents/HeaderLayouts";
import Booking from "./components/layerComponents/SectionLayouts";
import Sign from "./components/layerComponents/Sign";
function App() {


  return (
    <div className="app">    
      <BrowserRouter>
         <Routes>
             <Route exact path="/" element={<Booking/>}/>
             <Route path="/header" element={<Header/>}/>
             <Route path="/contact" element={<Contact
              title ="Contact us"
             />}/>
             <Route path="/sign" element={<Sign/>}/>             
         </Routes>
         </BrowserRouter>
       
    </div>
  );
}

export default App;
