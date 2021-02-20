/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../header';
import SideFilter from '../side-filter';
import TopFilter from '../top-filter';
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

    const [filters, setFilters] = useState([
        {
            lable: 'Все',
            checked: false,
            htmlForId: 'all',
        },
        {
            lable: 'Без пересадок',
            checked: false,
            htmlForId: 'without',
        },
        {
            lable: '1 пересадка',
            checked: true,
            htmlForId: 'one',
        },
        {
            lable: '2 пересадки',
            checked: false,
            htmlForId: 'two',
        },
        {
            lable: '3 пересадки',
            checked: false,
            htmlForId: 'three',
        },
    ]);

    const [topBtns, setTopBtns] = useState([
        {
            lable: 'Самый дешевый',
            aria: 'Получит список самых дешевых билетов',
            isActive: true,
        },
        {
            lable: 'Самый быстрый',
            aria: 'Получит список самых быстрых перелетов',
            isActive: false,
        },
        {
            lable: 'Оптимальный',
            aria: 'Получит список оптимального соотношения цены и скорости',
            isActive: false,
        },
    ]);

    return (
        <section className={classes.app}>
            <Header />
            <div className={classes.main}>
                <div className={classes.left}>
                    <SideFilter filters={filters} />
                </div>
                <div className={classes.right}>
                    <TopFilter topBtns={topBtns} />
                    <TicketList tickets={tickets} />
                    <DownloadBtn />
                </div>
            </div>
        </section>
    );
}

export default App;
