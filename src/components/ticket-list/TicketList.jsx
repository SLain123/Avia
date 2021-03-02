import React from 'react';
import { useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import TicketItem from '../ticket-item';
import DownloadBtn from '../download-btn';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import LoadString from '../load-string';

import classes from './TicketList.module.scss';

const TicketList = () => {
    const onLoad = useSelector((state) => state.tickets.onLoad);
    const onFail = useSelector((state) => state.tickets.onFail);
    const onComplite = useSelector((state) => state.tickets.onComplite);
    const tickets = useSelector((state) => state.tickets.filtredList);
    const howTickets = useSelector((state) => state.tickets.howTickets);

    const loadString = !onComplite ? <LoadString /> : null;

    if (onLoad && tickets.length === 0) {
        return <Spinner />;
    }

    if (onFail > 4 && tickets.length === 0) {
        return <ErrorMessage />;
    }

    if (tickets.length === 0) {
        return (
            <p className={classes.null}>
                Рейсов, подходящих под заданные фильтры, не найдено
            </p>
        );
    }

    const ticketList = tickets
        .slice(0, howTickets)
        .map((ticket) => (
            <TicketItem {...ticket} key={`${uniqueId('ticket_')}`} />
        ));

    return (
        <>
            {loadString}
            <ul className={classes.list}>{ticketList}</ul>
            <DownloadBtn />
        </>
    );
};

export default TicketList;
