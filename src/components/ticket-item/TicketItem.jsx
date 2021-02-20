import React from 'react';
import PropTypes from 'prop-types';
import logo from './S7.png';

import classes from './TicketItem.module.scss';

const TicketItem = ({ cost, route, length, stops }) => (
    <li className={classes.ticket}>
        <div className={classes.header}>
            <span className={classes.cost}>{cost} P</span>
            <img src={logo} alt='avia-logo' />
        </div>
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <p className={classes.title}>MOW – HKT</p>
                    <p className={classes.text}>{route}</p>
                </div>
                <div className={classes.inner}>
                    <p className={classes.title}>MOW – HKT</p>
                    <p className={classes.text}>{route}</p>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <p className={classes.title}>В пути</p>
                    <p className={classes.text}>{length}</p>
                </div>
                <div className={classes.inner}>
                    <p className={classes.title}>В пути</p>
                    <p className={classes.text}>{length}</p>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <p className={classes.title}>2 пересадки</p>
                    <p className={classes.text}>{stops}</p>
                </div>
                <div className={classes.inner}>
                    <p className={classes.title}>1 пересадка</p>
                    <p className={classes.text}>{stops}</p>
                </div>
            </div>
        </div>
    </li>
);

TicketItem.propTypes = {
    cost: PropTypes.string,
    route: PropTypes.string,
    length: PropTypes.string,
    stops: PropTypes.string,
};

TicketItem.defaultProps = {
    cost: '0',
    route: '-',
    length: '0',
    stops: '-',
};

export default TicketItem;
