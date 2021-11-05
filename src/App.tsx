import React from 'react';
import {Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import {TodoState} from "./TodoApp/TodoState";
import {Home} from "./Home";
import {CurrentTime} from "./CurrentTime/CurrentTime";
import {Notes} from "./Notes/Notes";


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
                    <Route path={"/notes"}>
                        <Notes/>
                    </Route>
                </Switch>
            </div>
            <div className={'navbar'}>
                <NavLink exact={true} activeClassName={'active'} to={"/"}>Home</NavLink>
                <NavLink activeClassName={'active'} to={"/todoapp"}>TodoApp</NavLink>
                <NavLink activeClassName={'active'} to={"/time"}>Timer</NavLink>
                <NavLink activeClassName={'active'} to={"/notes"}>Notes</NavLink>
            </div>
        </div>
    )

}

export default App;
