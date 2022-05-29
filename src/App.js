import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import CityContainer from "./containers/CityContainer";
import CulinaryContainer from "./containers/CulinaryContainer";
import CultureContainer from "./containers/CultureContainer";
import DestinationContainer from "./containers/DestinationContainer";
import MarketplaceContainer from "./containers/MarketplaceContainer";
import MerchandiseContainer from "./containers/MerchandiseContainer";
import VideovrContainer from "./containers/VideovrContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/city" exact component={CityContainer} />
          <Route path="/culinary" exact component={CulinaryContainer} />
          <Route path="/culture" exact component={CultureContainer} />
          <Route path="/destinaion" exact component={DestinationContainer} />
          <Route path="/marketplace" exact component={MarketplaceContainer} />
          <Route path="/merchandise" exact component={MerchandiseContainer} />
          <Route path="/videovr" exact component={VideovrContainer} />


          <Route path="/create" exact component={CreateUserContainer} />

          <Route path="/detail/:id" exact component={DetailUserContainer} />

          <Route path="/edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
