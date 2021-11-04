import React, {useEffect, useState} from 'react';
import s from './CurrentTime.module.css';

export const CurrentTime = () => {

    let date = (new Date()).toLocaleTimeString();

    const [value, setValue] = useState(date);


    useEffect(() => {
        setInterval(() => {
            date = (new Date()).toLocaleTimeString()

            setValue(date)
        }, 1000);
    }, []);

    return (
        <div className={s.timer}>
            <h1 className={s.title}>Current time: </h1>
            <span className={s.time}>{value}</span>
        </div>
    );
};