/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './SideFilter.module.scss';

const SideFilter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const makeActive = (evt) => {
        dispatch({ type: 'MAKE_ACTIVE', id: evt.target.id });
        dispatch({ type: 'CHECK_ALL', id: evt.target.id });
    };

    const filterList = filters.map(({ lable, checked, htmlForId }) => (
        <li key={htmlForId} className={classes.item}>
            <input
                type='checkbox'
                id={htmlForId}
                className={classes.checkbox}
                checked={checked}
                onChange={makeActive}
            />
            <label className={classes.lable} htmlFor={htmlForId}>
                {lable}
            </label>
        </li>
    ));

    return (
        <div className={classes.panel}>
            <p className={classes.title}>Количество пересадок</p>
            <ul className={classes.list}>{filterList}</ul>
        </div>
    );
};

export default SideFilter;
