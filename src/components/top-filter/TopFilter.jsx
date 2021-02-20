import React from 'react';

import classes from './TopFilter.module.scss';

const TopFilter = ({ topBtns }) => {
    const btnList = topBtns.map(({ lable, aria, isActive }) => {
        const iaActiveClass = isActive
            ? `${classes.active} ${classes.btn}`
            : classes.btn;

        return (
            <li key={lable} className={classes.item}>
                <button
                    type='button'
                    aria-label={aria}
                    className={iaActiveClass}
                >
                    {lable}
                </button>
            </li>
        );
    });

    return <ul className={classes.panel}>{btnList}</ul>;
};

export default TopFilter;