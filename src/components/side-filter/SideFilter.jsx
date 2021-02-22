import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateBox, checkBoxs } from '../../actions';

import classes from './SideFilter.module.scss';

const SideFilter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const makeActive = (evt) => {
        dispatch(activateBox(evt.target.id));
        dispatch(checkBoxs(evt.target.id));
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
