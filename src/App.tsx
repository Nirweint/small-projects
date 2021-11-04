import React from 'react';
import {Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import {TodoState} from "./TodoApp/TodoState";
import {Home} from "./Home";
import {CurrentTime} from "./CurrentTime/CurrentTime";


function App() {

    return (
        <div className={'app'}>
            <div className={'content'}>
                <Switch>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    <Route path={"/todoapp"}>
                        <TodoState/>
                    </Route>
                    <Route path={"/time"}>
                        <CurrentTime/>
                    </Route>
                </Switch>
            </div>
            <div className={'navbar'}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/todoapp"}>TodoApp</NavLink>
                <NavLink to={"/time"}>Timer</NavLink>
            </div>
        </div>
    )

}

export default App;
