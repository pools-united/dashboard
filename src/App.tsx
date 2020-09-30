import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./lib/style/index";

import { LandingPage } from "pages"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Route path ="/" exact component={()=> <LandingPage /> }/>
        <Route path ="/pool" exact component={()=>{return(<div>Pool</div>) }}/>

      <Switch></Switch>
    </BrowserRouter>
  );
}

export default App;
