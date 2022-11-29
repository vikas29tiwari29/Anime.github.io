import { Redirect, Route } from "react-router-dom";
import Introduction from './Pages/Introduction';
import Navbar from './Components/Navbar/Navbar';
import FavAnime from "./Pages/FavAnime";
import React from "react";
import AnimeFights from "./Pages/AnimeFights";
import MangaPanels from "./Pages/MangaPanels";
function App() {
  return (
    <>
    <Navbar/>
    <switch>
      <Route path="/" exact>
      <Redirect to='/introduction'/>
      <Introduction/>
      </Route>
      <Route path="/introduction">
      <Introduction/>
      </Route>
      <Route path="/topanime">
     <FavAnime/>
      </Route>
      <Route path="/topfights">
     <AnimeFights/>
      </Route>
      <Route path="/topmanga">
     <MangaPanels/>
      </Route>
      </switch>
    
    </>
  );
}

export default App;
