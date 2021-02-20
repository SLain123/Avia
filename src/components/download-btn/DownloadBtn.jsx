import React from 'react';

import classes from './DownloadBtn.module.scss';

const DownloadBtn = () => (
    <button
        type='button'
        aria-label='Загрузить дополнительные билеты'
        className={classes.btn}
    >
        Показать еще 5 билетов!
    </button>
);

export default DownloadBtn;
