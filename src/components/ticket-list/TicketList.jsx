import React from 'react';
import TicketItem from '../ticket-item';

import classes from './TicketList.module.scss';

const TicketList = ({ tickets }) => {
    const ticketList = tickets.map((ticket) => {
        return <TicketItem {...ticket} />;
    });

    return <ul className={classes.list}>{ticketList}</ul>;
};

export default TicketList;
