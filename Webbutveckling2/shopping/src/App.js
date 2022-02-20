import React from "react";
import data from "./components/back/data/Data";
import Header from "./components/front/header/Header";
import Routing from "./components/front/Router/Routing";
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {
  const { albumItems } = data;
  return (
      <div>
          <Router>
              <Header/>
              <Routing albumItems={albumItems}/>
          </Router>

      </div>
  );
};

export default App;
