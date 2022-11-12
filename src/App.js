import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// User CRUD
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import HomeContainer from "./containers/HomeContainer";

// City CRUD
import CityContainer from "./containers/CityContainer";
import DetailCityContainer from "./containers/DetailCityContainer";
import CreateCityContainer from "./containers/CreateCityContainer";
import EditCityContainer from "./containers/EditCityContainer";

//Culinary CRUD
import CulinaryContainer from "./containers/CulinaryContainer";
import DetailCulinaryContainer from "./containers/DetailCulinaryContainer";
import CreateCulinaryContainer from "./containers/CreateCulinaryContainer";
import EditCulinaryContainer from "./containers/EditCulinaryContainer";

// Culture CRUD
import CultureContainer from "./containers/CultureContainer";
import DetailCultureContainer from "./containers/DetailCultureContainer";
import CreateCultureContainer from "./containers/CreateCultureContainer";
import EditCultureContainer from "./containers/EditCultureContainer";

// Destination CRUD
import DestinationContainer from "./containers/DestinationContainer";
import DetailDestinationContainer from "./containers/DetailDestinationContainer";
import CreateDestinationContainer from "./containers/CreateDestinationContainer";
import EditDestinationContainer from "./containers/EditDestinationContainer";

// Marketplace CRUD
import MarketplaceContainer from "./containers/MarketplaceContainer";
import DetailMarketplaceContainer from "./containers/DetailMarketplaceContainer";
import CreateMarketplaceContainer from "./containers/CreateMarketplaceContainer";
import EditMarketplaceContainer from "./containers/EditMarketplaceContainer";

// Merchandise CRUD
import MerchandiseContainer from "./containers/MerchandiseContainer";
import DetailMerchandiseContainer from "./containers/DetailMerchandiseContainer";
import CreateMerchandiseContainer from "./containers/CreateMerchandiseContainer";
import EditMerchandiseContainer from "./containers/EditMerchandiseContainer";

// Video VR CRUD
import VideovrContainer from "./containers/VideovrContainer";
import DetailVideovrContainer from "./containers/DetailVideovrContainer";
import CreateVideovrContainer from "./containers/CreateVideovrContainer";
import EditVideovrContainer from "./containers/EditVideovrContainer";

// Orders CRUD
import OrdersContainer from "./containers/OrdersContainer";
import DetailOrdersContainer from "./containers/DetailOrdersContainer";
import EditOrdersContainer from "./containers/EditOrdersContainer";

// Login
import LoginContainer from "./containers/auth/LoginContainer";
// import { isLogin } from "./components/auth/LoginComponent";

import PrivateRoute from "./ProtectedRoutes";

export default class App extends Component {
  render() {
    return (
      <div>
        
        
        <BrowserRouter>
          <Switch>
          <Route path="/login" exact component={LoginContainer} />
          
            <div>
              <NavbarComponent />
              <JumbotronComponent />
              {/* {console.log(isLogin)} */}
<<<<<<< HEAD
              <Route path="/user" exact component={HomeContainer} />
              <Route path="/create" exact component={CreateUserContainer} />
              <Route path="/detail/:id" exact component={DetailUserContainer} />
              <Route path="/edit/:id" exact component={EditUserContainer} />

              <Route path="/city" exact component={CityContainer} />
              <Route path="/detailcity/:id" exact component={DetailCityContainer} />
              <Route path="/createcity" exact component={CreateCityContainer} />
              <Route path="/editcity/:id" exact component={EditCityContainer} />

              <Route path="/culinary" exact component={CulinaryContainer} />
              <Route path="/detailculinary/:id" exact component={DetailCulinaryContainer} />
              <Route path="/createculinary" exact component={CreateCulinaryContainer} />
              <Route path="/editculinary/:id" exact component={EditCulinaryContainer} />

              <Route path="/culture" exact component={CultureContainer} />
              <Route path="/detailculture/:id" exact component={DetailCultureContainer} />
              <Route path="/createculture" exact component={CreateCultureContainer} />
              <Route path="/editculture/:id" exact component={EditCultureContainer} />

              <Route path="/destination" exact component={DestinationContainer} />
              <Route path="/detaildestination/:id" exact component={DetailDestinationContainer} />
              <Route path="/createdestination" exact component={CreateDestinationContainer} />
              <Route path="/editdestination/:id" exact component={EditDestinationContainer} />

              <Route path="/marketplace" exact component={MarketplaceContainer} />
              <Route path="/detailmarketplace/:id" exact component={DetailMarketplaceContainer} />
              <Route path="/createmarketplace" exact component={CreateMarketplaceContainer} />
              <Route path="/editmarketplace/:id" exact component={EditMarketplaceContainer} />

              <Route path="/merchandise" exact component={MerchandiseContainer} />
              <Route path="/detailmerchandise/:id" exact component={DetailMerchandiseContainer} />
              <Route path="/createmerchandise" exact component={CreateMerchandiseContainer} />
              <Route path="/editmerchandise/:id" exact component={EditMerchandiseContainer} />

              <Route path="/videovr" exact component={VideovrContainer} />
              <Route path="/detailvideovr/:id" exact component={DetailVideovrContainer} />
              <Route path="/createvideovr" exact component={CreateVideovrContainer} />
              <Route path="/editvideovr/:id" exact component={EditVideovrContainer} />

              
              <Route path="/orders" exact component={OrdersContainer} />
              <Route path="/detailorders/:id" exact component={DetailOrdersContainer} />
              <Route path="/editorders/:id" exact component={EditOrdersContainer} />
=======
              <PrivateRoute path="/">
                <Route path="/user" exact component={HomeContainer} />
                <Route path="/create" exact component={CreateUserContainer} />
                <Route path="/detail/:id" exact component={DetailUserContainer} />
                <Route path="/edit/:id" exact component={EditUserContainer} />

                <Route path="/city" exact component={CityContainer} />
                <Route path="/detailcity/:id" exact component={DetailCityContainer} />
                <Route path="/createcity" exact component={CreateCityContainer} />
                <Route path="/editcity/:id" exact component={EditCityContainer} />

                <Route path="/culinary" exact component={CulinaryContainer} />
                <Route path="/detailculinary/:id" exact component={DetailCulinaryContainer} />
                <Route path="/createculinary" exact component={CreateCulinaryContainer} />
                <Route path="/editculinary/:id" exact component={EditCulinaryContainer} />

                <Route path="/culture" exact component={CultureContainer} />
                <Route path="/detailculture/:id" exact component={DetailCultureContainer} />
                <Route path="/createculture" exact component={CreateCultureContainer} />
                <Route path="/editculture/:id" exact component={EditCultureContainer} />

                <Route path="/destination" exact component={DestinationContainer} />
                <Route path="/detaildestination/:id" exact component={DetailDestinationContainer} />
                <Route path="/createdestination" exact component={CreateDestinationContainer} />
                <Route path="/editdestination/:id" exact component={EditDestinationContainer} />

                <Route path="/marketplace" exact component={MarketplaceContainer} />
                <Route path="/detailmarketplace/:id" exact component={DetailMarketplaceContainer} />
                <Route path="/createmarketplace" exact component={CreateMarketplaceContainer} />
                <Route path="/editmarketplace/:id" exact component={EditMarketplaceContainer} />

                <Route path="/merchandise" exact component={MerchandiseContainer} />
                <Route path="/detailmerchandise/:id" exact component={DetailMerchandiseContainer} />
                <Route path="/createmerchandise" exact component={CreateMerchandiseContainer} />
                <Route path="/editmerchandise/:id" exact component={EditMerchandiseContainer} />

                <Route path="/videovr" exact component={VideovrContainer} />
                <Route path="/detailvideovr/:id" exact component={DetailVideovrContainer} />
                <Route path="/createvideovr" exact component={CreateVideovrContainer} />
                <Route path="/editvideovr/:id" exact component={EditVideovrContainer} />
              </PrivateRoute>
              
>>>>>>> 958f0983848d0389c9ecfeca7dd59e4dffe140a9
            </div>
          </Switch>
            
          
          
        </BrowserRouter>
      </div>
    );
  }
}
