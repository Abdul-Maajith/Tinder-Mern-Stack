import React from "react";
import "./App.css"
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

const App = () => {
   return (
    //    BEM class naming!
       <div className="app">

           <Header />
           
           <TinderCards />

           <SwipeButtons />
       </div>
   )
}

export default App