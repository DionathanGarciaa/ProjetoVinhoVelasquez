import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home/home';
import Clientes from '../Pages/Clientes/clientes';
import ClienteTotalCompra from '../Pages/Clientes/clientesTotalCompra';
import Compras2016 from '../Pages/Clientes/compras2016';


function Rotas() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Clientes" component={Clientes} />
      <Route path="/ClienteTotalCompra" component={ClienteTotalCompra} />
      <Route path="/bestClient" component={Compras2016} />
    </Switch>
    </BrowserRouter>
  );
}

export default Rotas;