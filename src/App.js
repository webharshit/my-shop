import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import SignInPage from "./pages/signinpage/signinpage.page";
import Header from "./components/header/header.component";

function HatsPage() {
    return (
        <div>
            <h1>HATS PAGE
            </h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/"
                    component={HomePage}/>
                <Route exact path="/signin"
                    component={SignInPage}/>
                <Route path="/hats"
                    component={HatsPage}/>
                <Route path="/shop"
                    component={ShopPage}/>
            </Switch>
        </div>
    );
}
export default App;
