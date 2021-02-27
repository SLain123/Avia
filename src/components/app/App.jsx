import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tickets from '../../services/tickets-service';
import {
    addSearchId,
    addTickets,
    failDownload,
    completeDownload,
    completeFail,
} from '../../actions';
import Header from '../header';
import SideFilter from '../side-filter';
import TabFilter from '../tab-filter';
import TicketList from '../ticket-list';

import classes from './App.module.scss';

function App() {
    const dispatch = useDispatch();
    const searchId = useSelector((state) => state.tickets.searchId);
    const onFail = useSelector((state) => state.tickets.onFail);

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
        if (searchId !== null) {
            downloadAllTickets();
        }
    }, [searchId, downloadAllTickets]);

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
