import React from 'react';
import logo from './S7.png';

import classes from './TicketItem.module.scss';

const TicketItem = ({ cost, route, length, stops }) => {
    return (
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
};

export default TicketItem;
