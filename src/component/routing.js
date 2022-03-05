import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import news from "./News";
import home from "./home";
import technology from "./technology";
import newsView from "./newsView"
import login from "./login";
import notFounding from "./notFounding";

const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/news" exact component={news}/>
                <Route path="/news/:id" exact component={newsView}/>
                <Route path="/technology" exact component={technology}/>
                <Route path="/login" exact component={login}/>
                <Route component={notFounding} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;