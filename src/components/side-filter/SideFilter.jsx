import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import activateBox from '../../reducers/filterReducer/actions';

import classes from './SideFilter.module.scss';

const SideFilter = () => {
    const dispatch = useDispatch();
    const checkboxes = useSelector((state) => state.filters.checkboxes);

    const makeActive = (evt) => {
        dispatch(activateBox(checkboxes, evt.target.id));
    };

    const filterList = checkboxes.map(({ lable, checked, htmlForId }) => (
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
