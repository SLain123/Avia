/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../header';
import SideFilter from '../side-filter';
import TabFilter from '../tab-filter';
import TicketList from '../ticket-list';
import DownloadBtn from '../download-btn';

import classes from './App.module.scss';

function App() {
    const [tickets, setTickets] = useState([
        {
            id: 1,
            cost: '13 400',
            route: '10:45 - 11-00',
            length: '2 hours',
            stops: 'NU',
        },
        {
            id: 2,
            cost: '13 400',
            route: '10:45 - 11-00',
            length: '2 hours',
            stops: 'NU',
        },
        {
            id: 3,
            cost: '13 400',
            route: '10:45 - 11-00',
            length: '2 hours',
            stops: 'NU',
        },
    ]);

    return (
        <section className={classes.app}>
            <Header />
            <div className={classes.main}>
                <div className={classes.left}>
                    <SideFilter />
                </div>
                <div className={classes.right}>
                    <TabFilter />
                    <TicketList tickets={tickets} />
                    <DownloadBtn />
                </div>
            </div>
        </section>
    );
}

export default App;
