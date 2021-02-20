import React from 'react';
import TicketItem from '../ticket-item';

import classes from './TicketList.module.scss';

const TicketList = ({ tickets }) => {
    const ticketList = tickets.map((ticket) => {
        const { id } = ticket;
        return <TicketItem {...ticket} key={id} />;
    });

    return <ul className={classes.list}>{ticketList}</ul>;
};

export default TicketList;
