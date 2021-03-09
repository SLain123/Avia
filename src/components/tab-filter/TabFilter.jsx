import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import activateBtn from '../../reducers/tabReducer/actions';
import {
    performSort,
    changeSortValue,
} from '../../reducers/ticketsReducer/actions';

import classes from './TabFilter.module.scss';

const TabFilter = () => {
    const dispatch = useDispatch();
    const tabs = useSelector((state) => state.tabs);

    const makeActive = (evt) => {
        dispatch(activateBtn(evt.target.id));
        dispatch(changeSortValue(evt.target.id));
        dispatch(performSort());
    };

    const btnList = tabs.map(({ lable, aria, isActive, id }) => {
        const isActiveClass = isActive
            ? `${classes.active} ${classes.btn}`
            : classes.btn;

        return (
            <li key={id} className={classes.item}>
                <button
                    type='button'
                    id={id}
                    aria-label={aria}
                    className={isActiveClass}
                    onClick={makeActive}
                >
                    {lable}
                </button>
            </li>
        );
    });

    return <ul className={classes.panel}>{btnList}</ul>;
};

export default TabFilter;
