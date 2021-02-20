import React from 'react';

import classes from './SideFilter.module.scss';

const SideFilter = ({ filters }) => {
    const filterList = filters.map(({ lable, checked, htmlForId }) => {
        return (
            <li key={htmlForId} className={classes.item}>
                <input
                    type='checkbox'
                    htmlFor={htmlForId}
                    className={classes.checkbox}
                    defaultChecked={checked}
                />
                <label className={classes.lable} id={htmlForId}>
                    {lable}
                </label>
            </li>
        );
    });

    return (
        <div className={classes.panel}>
            <p className={classes.title}>Количество пересадок</p>
            <ul className={classes.list}>{filterList}</ul>
        </div>
    );
};

export default SideFilter;
