import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./lib/style/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
<Route path ="/" exact component={()=>{return(<div>Landing</div>) }}/>
<Route path ="/pool" exact component={()=>{return(<div>Pool</div>) }}/>

      <Switch></Switch>
    </BrowserRouter>
  );
}

export default App;
