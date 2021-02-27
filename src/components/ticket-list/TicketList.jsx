import React from 'react';
import { useSelector } from 'react-redux';
import TicketItem from '../ticket-item';
import DownloadBtn from '../download-btn';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';

import classes from './TicketList.module.scss';

const TicketList = () => {
    const onLoad = useSelector((state) => state.tickets.onLoad);
    const onFail = useSelector((state) => state.tickets.onFail);
    const tickets = useSelector((state) => state.tickets.ticketList);
    const howTickets = useSelector((state) => state.tickets.howTickets);

    if (onLoad) {
        return <Spinner />;
    }

    if (onFail > 4) {
        return <ErrorMessage />;
    }

    const ticketList = tickets.slice(0, howTickets).map((ticket) => {
        const { carrier, price } = ticket;

        return <TicketItem {...ticket} key={`${carrier}-${price}`} />;
    });

    return (
        <>
            <ul className={classes.list}>{ticketList}</ul>
            <DownloadBtn />
        </>
    );
};

export default TicketList;
