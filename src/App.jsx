import { BrowserRouter } from "react-router-dom";
import NavbarIndex from "./Pages/Navbar/NavbarIndex";


function App() {
  return (
    <div >
     <BrowserRouter>
        <NavbarIndex/>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
