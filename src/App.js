import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login/Login"
import AltaProducto from "./pages/AltaProducto/AltaProducto";
import NavBar from "./components/NavBar/NavBar"
import AltaCliente from "./pages/AltaCliente/AltaCliente";
import GestionPedidos from "./pages/GestionPedidos/GestionPedidos";

function App() {

    return (
        <div className="App">
            <Router>
                <div className={"margin"}>
                    <NavBar/>
                </div>
                <div className={"center-app"}>
                    <Switch>
                        <Route path="/altaproducto">
                            <AltaProducto/>
                        </Route>
                        <Route path="/altacliente">
                            <AltaCliente/>
                        </Route>
                        <Route path="/gestionpedidos">
                            <GestionPedidos/>
                        </Route>
                        <Route path="/">
                            <Login/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
