import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import activateBtn from '../../reducers/tabReducer/actions';
import { changeSortValue } from '../../reducers/ticketsReducer/actions';

import classes from './TabFilter.module.scss';

const makeActiveBtn = (tabs, id) =>
    tabs.map((tab) => {
        if (tab.id === id) {
            return {
                ...tab,
                isActive: true,
            };
        }
        return {
            ...tab,
            isActive: false,
        };
    });

const TabFilter = () => {
    const dispatch = useDispatch();
    const tabs = useSelector((state) => state.tabs);

    const makeActive = (evt) => {
        dispatch(activateBtn(makeActiveBtn(tabs, evt.target.id)));
        dispatch(changeSortValue(evt.target.id));
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
