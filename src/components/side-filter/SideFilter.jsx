import React from 'react';
import PropTypes from 'prop-types';

import classes from './SideFilter.module.scss';

const SideFilter = ({ filters }) => {
    const filterList = filters.map(({ lable, checked, htmlForId }) => (
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
    ));

    return (
        <div className={classes.panel}>
            <p className={classes.title}>Количество пересадок</p>
            <ul className={classes.list}>{filterList}</ul>
        </div>
    );
};

SideFilter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object),
};

SideFilter.defaultProps = {
    filters: [],
};

export default SideFilter;
