import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import activateBox from '../../reducers/filterReducer/actions';

import classes from './SideFilter.module.scss';

const setStatusToMain = (checkboxes, status) =>
    checkboxes.map((checkbox) => {
        if (checkbox.htmlForId === 'all') {
            return {
                ...checkbox,
                checked: status,
            };
        }
        return checkbox;
    });

const setStatusForEach = (checkboxes, id) => {
    if (id === 'all') {
        const currentStatus = !checkboxes[0].checked;
        const newFilters = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: currentStatus,
        }));
        return newFilters;
    }

    const newFilters = checkboxes.map((checkbox) => {
        if (checkbox.htmlForId === id) {
            const currentStatus = checkbox.checked;
            return {
                ...checkbox,
                checked: !currentStatus,
            };
        }
        return checkbox;
    });

    return newFilters;
};

const checkAllBoxes = (checkboxes, id) => {
    if (id === 'all') {
        return checkboxes;
    }

    let withoutMain = true;
    checkboxes.forEach((checkbox, indx) => {
        if (indx === 0) {
            return;
        }
        if (!checkbox.checked) {
            withoutMain = false;
        }
    });

    if (withoutMain) {
        return setStatusToMain(checkboxes, true);
    }
    return setStatusToMain(checkboxes, false);
};

const getActiveBoxList = (checkboxes) => {
    const result = [];
    checkboxes.forEach(({ checked, filter }) => {
        if (checked) {
            result.push(filter);
        }
    });

    return result;
};

const SideFilter = () => {
    const dispatch = useDispatch();
    const checkboxes = useSelector((state) => state.filters.checkboxes);

    const makeActive = (evt) => {
        const setStatusForEachResult = setStatusForEach(
            checkboxes,
            evt.target.id,
        );
        const checkboxesResult = checkAllBoxes(
            setStatusForEachResult,
            evt.target.id,
        );
        const filterListResult = getActiveBoxList(checkboxesResult);

        dispatch(activateBox(checkboxesResult, filterListResult));
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
