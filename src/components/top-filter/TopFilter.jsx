import React from 'react';

import classes from './TopFilter.module.scss';

const TopFilter = () => {
    return (
        <div className={classes.panel}>
            <button
                type='button'
                aria-label=''
                className={`${classes.active} ${classes.btn}`}
            >
                Самый дешевый
            </button>
            <button type='button' aria-label='' className={classes.btn}>
                Самый быстрый
            </button>
            <button type='button' aria-label='' className={classes.btn}>
                Оптимальный
            </button>
        </div>
    );
};

export default TopFilter;
