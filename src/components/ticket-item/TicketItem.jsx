import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

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

const getTime = (date, duration) => {
    const formatFirstDate = new Date(date);
    const formatSecindDate = new Date(
        formatFirstDate.getTime() + duration * 60000,
    );
    const firstTime = format(formatFirstDate, 'KK:mm');
    const secondTime = format(formatSecindDate, 'KK:mm');

    return `${firstTime} - ${secondTime}`;
};

const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
};

const getTransferLength = (length) => {
    if (length === 0) {
        return '0 пересадок';
    }
    if (length === 1) {
        return '1 пересадка';
    }
    if (length > 1 && length < 5) {
        return `${length} пересадки`;
    }

    return `${length} пересадок`;
};

const getTransfer = (transferList) => {
    if (transferList.length === 0) {
        return '-';
    }
    return transferList.join(', ');
};

const TicketItem = ({ price, carrier, segments }) => {
    const first = segments[0];
    const second = segments[1];

    return (
        <li className={classes.ticket}>
            <div className={classes.header}>
                <span className={classes.cost}>{getCost(price)}</span>
                <img
                    src={`//pics.avs.io/99/36/${carrier}.png`}
                    alt='avia-logo'
                />
            </div>
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.inner}>
                        <p
                            className={classes.title}
                        >{`${first.origin}-${first.destination}`}</p>
                        <p className={classes.text}>
                            {getTime(first.date, first.duration)}
                        </p>
                    </div>
                    <div className={classes.inner}>
                        <p
                            className={classes.title}
                        >{`${second.origin}-${second.destination}`}</p>
                        <p className={classes.text}>
                            {getTime(second.date, second.duration)}
                        </p>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.inner}>
                        <p className={classes.title}>В пути</p>
                        <p className={classes.text}>
                            {getTimeFromMins(first.duration)}
                        </p>
                    </div>
                    <div className={classes.inner}>
                        <p className={classes.title}>В пути</p>
                        <p className={classes.text}>
                            {getTimeFromMins(second.duration)}
                        </p>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.inner}>
                        <p className={classes.title}>
                            {getTransferLength(first.stops.length)}
                        </p>
                        <p className={classes.text}>
                            {getTransfer(first.stops)}
                        </p>
                    </div>
                    <div className={classes.inner}>
                        <p className={classes.title}>
                            {getTransferLength(second.stops.length)}
                        </p>
                        <p className={classes.text}>
                            {getTransfer(second.stops)}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};

TicketItem.propTypes = {
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TicketItem.defaultProps = {
    price: 0,
    carrier: 'S7',
};

export default TicketItem;
