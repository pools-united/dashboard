import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./lib/style/index";
import MyProvider from './lib/Context/ContextProvider';
import { LandingPage } from "pages"

function App() {
  return (
    <MyProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path ="/" exact component={()=> <LandingPage /> }/>
        <Route path ="/pool" exact component={()=>{return(<div>Pool</div>) }}/>

        </Switch>
    </BrowserRouter>
    </MyProvider>
  );
}

export default App;
