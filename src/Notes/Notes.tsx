import React, {useState} from 'react';
import {v1} from "uuid";
import {Note} from "./Note";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import s from './Notes.module.css';

export const Notes = () => {

    const state = [
            {id: v1(), noteTitle: 'First Note', text: 'Hello, im your first note', time: "22:00"},
            {id: v1(), noteTitle: 'First Note', text: 'Hello, im your first note', time: "22:00"},
    ]

    const uiState = {
        addBtnImg: "https://iconape.com/wp-content/files/ea/367350/svg/ios-add-circle-outline-logo-icon-png-svg.png"
    }

    const [notes, setNotes] = useState(state)


    return (
        <div className={s.notes}>
            <div className={s.notesWrapper}>
                <div className={s.notesTop}>
                    <h2>Notes deck</h2>
                        <FontAwesomeIcon
                            className={s.deleteBtn}
                            icon={faPlusSquare}
                            size={"lg"}
                            forwardedRef={() => {}}
                        />
                </div>
                <Note />
            </div>
        </div>
    );
}