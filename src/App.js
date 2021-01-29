import React from "react";
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.component";
import {Route, Switch} from "react-router-dom"

const hats = () => (<div>Hello</div>)
function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/hats" component={hats}/>
            </Switch>
        </div>
    );
}

export default App;
