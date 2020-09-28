import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home/index';
import Clientes from '../Pages/Clientes/clientes';
import ClienteTotalCompra from '../Pages/MaiorValorCompras/index';
import Compras2016 from '../Pages/Compras2016/index';
import ClientesFieis from '../Pages/ClientesFieis/index';


function Rotas() {
  return (
  
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/Clientes"} component={Clientes} />
      <Route path={"/ClienteTotalCompra"} component={ClienteTotalCompra} />
      <Route path={"/bestClient"} component={Compras2016} />
      <Route path={"/ClientesFieis"} component={ClientesFieis} />
    </Switch>
  );
}

export default Rotas;