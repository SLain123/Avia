import React from 'react';

import classes from './ErrorMessage.module.scss';

const ErrorMessage = () => (
    <div className={classes.error}>
        <span>Загрузка билетов неудачна. </span>
        <span>Обновите страницу для новой попытки.</span>
    </div>
);

export default ErrorMessage;
