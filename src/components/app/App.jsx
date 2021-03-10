import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tickets from '../../services/tickets-service';
import {
    addSearchId,
    addTickets,
    failDownload,
    completeDownload,
    completeFail,
    performFiltering,
} from '../../reducers/ticketsReducer/actions';
import Header from '../header';
import SideFilter from '../side-filter';
import TabFilter from '../tab-filter';
import TicketList from '../ticket-list';

import classes from './App.module.scss';

const sortTickets = (ticketList, sort) =>
    ticketList
        .slice()
        .sort(
            (
                { price: firstPrice, segments: firstSegments },
                { price: secondPrice, segments: secondSegments },
            ) => {
                const firstDuration =
                    firstSegments[0].duration + firstSegments[1].duration;
                const secondDuration =
                    secondSegments[0].duration + secondSegments[1].duration;
                if (sort === 'cheap') {
                    return firstPrice - secondPrice;
                }
                if (sort === 'speed') {
                    return firstDuration - secondDuration;
                }
                return (
                    firstDuration * 50 +
                    firstPrice -
                    (secondDuration * 50 + secondPrice)
                );
            },
        );

const filterTickets = (ticketList, filterList) => {
    const resultList = [];

    if (filterList[0] === 'all') {
        return ticketList;
    }

    filterList.forEach((filter) => {
        const newList = ticketList.filter((ticket) => {
            const { segments } = ticket;
            if (
                segments[0].stops.length === filter ||
                segments[1].stops.length === filter
            ) {
                return true;
            }
            return false;
        });

        resultList.push(...newList);
    });

    return resultList;
};

function App() {
    const dispatch = useDispatch();
    const searchId = useSelector((state) => state.tickets.searchId);
    const onFail = useSelector((state) => state.tickets.onFail);
    const filters = useSelector((state) => state.filters.filterList);
    const ticketList = useSelector((state) => state.tickets.ticketList);
    const sort = useSelector((state) => state.tickets.sort);

    const downloadAllTickets = useCallback(() => {
        Tickets.getTickets(searchId)
            .then(({ tickets, stop }) => {
                dispatch(addTickets(tickets));
                if (stop) {
                    dispatch(completeDownload());
                } else {
                    downloadAllTickets();
                }
            })
            .catch(() => {
                if (onFail > 4) {
                    dispatch(completeFail());
                } else {
                    dispatch(failDownload());
                }
            });
    }, [searchId, dispatch, onFail]);

    useEffect(() => {
        Tickets.getSearchId().then((id) => dispatch(addSearchId(id)));
    }, [dispatch]);

    useEffect(() => {
        setTimeout(() => {
            if (searchId !== null) {
                downloadAllTickets();
            }
        }, 1000);
    }, [searchId, downloadAllTickets]);

    useEffect(() => {
        const result = sortTickets(filterTickets(ticketList, filters), sort);

        dispatch(performFiltering(result));
    }, [filters, dispatch, ticketList, sort]);

    return (
        <section className={classes.app}>
            <Header />
            <div className={classes.main}>
                <div className={classes.left}>
                    <SideFilter />
                </div>
                <div className={classes.right}>
                    <TabFilter />
                    <TicketList />
                </div>
            </div>
        </section>
    );
}

export default App;
