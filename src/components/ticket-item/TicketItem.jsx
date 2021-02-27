/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import logo from './S7.png';

import classes from './TicketItem.module.scss';

const getCost = (price) => {
    if (price > 999) {
        const costArray = String(price).split('');
        const firstNum = costArray.slice(0, costArray.length - 3).join('');
        const lastNum = costArray.slice(-3, costArray.length).join('');

        return `${firstNum} ${lastNum} Р`;
    }

    return `${price} Р`;
};

const getTime = (date) => {
    const time = new Date(date);
    console.log(date);
    console.log(time.getHours(), time.getMinutes());
};

const TicketItem = ({ price, carrier, segments }) => {
    const first = segments[0];
    const second = segments[1];

    getTime(first.date);

    return (
        <li className={classes.ticket}>
            <div className={classes.header}>
                <span className={classes.cost}>{getCost(price)}</span>
                <img src={logo} alt='avia-logo' />
            </div>
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.inner}>
                        <p
                            className={classes.title}
                        >{`${first.origin}-${first.destination}`}</p>
                        <p className={classes.text}>{first.data}</p>
                    </div>
                    <div className={classes.inner}>
                        <p
                            className={classes.title}
                        >{`${second.origin}-${second.destination}`}</p>
                        <p className={classes.text}>{second.date}</p>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.inner}>
                        <p className={classes.title}>В пути</p>
                        <p className={classes.text}>{first.duration}</p>
                    </div>
                    <div className={classes.inner}>
                        <p className={classes.title}>В пути</p>
                        <p className={classes.text}>{second.duration}</p>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.inner}>
                        <p className={classes.title}>2 пересадки</p>
                        <p className={classes.text}>{first.stops.length}</p>
                    </div>
                    <div className={classes.inner}>
                        <p className={classes.title}>1 пересадка</p>
                        <p className={classes.text}>{second.stops.length}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

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
