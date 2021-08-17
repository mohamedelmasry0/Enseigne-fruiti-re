import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home";
import Modifier from "./Components/pages/Modifier";
import Paris from "./Components/pages/Paris";
import Marseille from "./Components/pages/Marseille";
import Dijon from "./Components/pages/Dijon";
import Lille from "./Components/pages/Lille";
import Nice from "./Components/pages/Nice";
import NotFound from "./Components/pages/NotFound";
import GrandTableau from "./Components/pages/GrandTableau";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/paris" component={Paris} />
        <Route path="/marseille" component={Marseille} />
        <Route path="/dijon" component={Dijon} />
        <Route path="/nice" component={Nice} />
        <Route path="/lille" component={Lille} />
        <Route path="/modifier" component={Modifier} />
        <Route path="/all" component={GrandTableau} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
