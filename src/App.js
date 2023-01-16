// import logo from './logo.svg';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import './App.css';
import Buttons from "./components/Buttons";
import Headers from './components/Headers';
// import Main from './components/Main';
import AddPerson from "./Pages/AddPerson";
import Retrieve from "./Pages/Retrieve";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Buttons/>
      <Routes>
                    <Route  path="/" element={<AddPerson/>} exact />
                    <Route path="/page1" element={<Retrieve/>}/>

                    </Routes>
      
      
        
        </BrowserRouter>
    </div>
  );
}

export default App;
