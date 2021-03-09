import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tickets from '../../services/tickets-service';
import {
    addSearchId,
    addTickets,
    failDownload,
    completeDownload,
    completeFail,
    performFirstSort,
    performFiltering,
} from '../../reducers/ticketsReducer/actions';
import Header from '../header';
import SideFilter from '../side-filter';
import TabFilter from '../tab-filter';
import TicketList from '../ticket-list';

import classes from './App.module.scss';

function App() {
    const dispatch = useDispatch();
    const searchId = useSelector((state) => state.tickets.searchId);
    const onLoad = useSelector((state) => state.tickets.onLoad);
    const onFail = useSelector((state) => state.tickets.onFail);
    const filters = useSelector((state) => state.filters.filterList);

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
        if (!onLoad) {
            dispatch(performFirstSort('cheap'));
        }
    }, [dispatch, onLoad]);

    useEffect(() => {
        dispatch(performFiltering(filters));
    }, [filters, dispatch]);

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
