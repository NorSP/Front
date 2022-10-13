import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Favorites } from "./views/favorites.jsx";
// import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Detalles } from "./views/detalles.js";
import { DetallesPlanetas } from "./views/detallesPlanetas.js";
import { DetallesVehicles } from "./views/detallesVehicles.js";
// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div style={{ background:"#786fa6"}}>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/people/detalles/:theid">
              <Detalles />
            </Route>
            <Route exact path="/planets/detalles/:theid">
              <DetallesPlanetas />
            </Route>
            <Route exact path="/vehicles/detalles/:theid">
              <DetallesVehicles />
            </Route>
            <Route>
              <h1> Not found! </h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};
export default injectContext(Layout);
