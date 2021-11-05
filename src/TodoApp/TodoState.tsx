import React, {useState} from 'react';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import s from './TodoState.module.css'

export type FilterValuesType = "all" | "active" | "completed";

export const TodoState = () => {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let updatedTasks = tasks.map((t) => {
            if (t.id === taskId) {
                return {...t, isDone}
            }else {
                return t
            }
        })
        setTasks(updatedTasks)
    }
    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = { id: v1(), title: title, isDone: false };
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }



    return (
        <div className={s.todo}>
            <Todolist title="Todo App"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      changeTaskStatus={changeTaskStatus}
                      addTask={addTask}
                      filter={filter}
            />
        </div>
    );
};
