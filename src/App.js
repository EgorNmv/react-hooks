import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/alertState";
import {GithubState} from "./context/github/githubState";
import Animation from "./pages/Animation";
import {Hoc} from "./pages/Hoc";
import Test from "./pages/Test";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert alert={{text: "Test"}}/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile/:name" component={Profile}/>
                            <Route path="/animation" component={Animation}/>
                            <Route path="/hoc" component={Hoc}/>
                            <Route path="/test" component={Test}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
