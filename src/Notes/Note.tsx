import React from 'react'
import s from './Note.module.css'
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Note = () => {
    return (
        <div className={s.note}>
            <div className={s.header}>
                <span>time</span>
                <div>
                    <FontAwesomeIcon
                        className={s.checkBtn}
                        icon={faCheck}
                        size={"lg"}
                        forwardedRef={() => {}}
                    />
                    <FontAwesomeIcon
                        className={s.trashBtn}
                        icon={faTrash}
                        size={"lg"}
                        forwardedRef={() => {}}
                    />
                </div>
            </div>

            <div className={s.text}>text</div>
        </div>
    );
}
