import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./TodoState";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    const [error, setError] = useState(false)

    const inputStyle = error ? "error" : ""
    const errorMessage = error ? <div style={{color: "red"}}>message is require</div> : null
    const filterBtnStyle = (filterName: FilterValuesType) => {
        return props.filter === filterName ? "active" : ""
    }

    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle);
        } else {
            setError(true)
        }

        setTitle("");
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler();
        }
    }
    const onClickRemoveTaskHandler = (taskId: string) => props.removeTask(taskId)
    const onClickFilterHandler = (filter: FilterValuesType) => {
        props.changeFilter(filter);
    }
    const changeTaskStatusHandler = (taskId: string, isDone: boolean) => {
        props.changeTaskStatus(taskId, isDone)
    }

    return <div>
        <h3 style={{margin: 0}}>{props.title}</h3>
        <div>
            <input
                className={inputStyle}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTaskHandler}>+</button>
            {errorMessage}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    return <li
                        key={t.id}
                        className={t.isDone ? "done" : ""}
                    >
                        <input

                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                changeTaskStatusHandler(t.id, e.currentTarget.checked)
                            }}
                        />
                        <span>{t.title}</span>
                        <button onClick={() => {
                            onClickRemoveTaskHandler(t.id)
                        }}>x
                        </button>
                    </li>
                })
            }
        </ul>
        <div>
            <button
                className={filterBtnStyle("all")}
                onClick={() => {
                    onClickFilterHandler('all')
                }}>All
            </button>
            <button
                className={filterBtnStyle("active")}
                onClick={() => {
                    onClickFilterHandler('active')
                }}>Active
            </button>
            <button
                className={filterBtnStyle("completed")}
                onClick={() => {
                    onClickFilterHandler('completed')
                }}>Completed
            </button>
        </div>
    </div>
}
