import React from 'react';
import {Route, NavLink} from "react-router-dom";
import './App.css';
import {TodoState} from "./TodoApp/TodoState";
import {Timer} from "./timer/Timer";


function App() {

    return (
        <div className={'app'}>
            <Route path={"/todoapp"}>
                <TodoState/>
            </Route>
            <Route path={"/timer"}>
                <Timer/>
            </Route>
            <div className={'links'}>
                <NavLink to={"/todoapp"}>TodoApp</NavLink>
                <NavLink to={"/timer"}>Timer</NavLink>
            </div>
        </div>
    )

}

export default App;
