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

export const addSearchId = (id) => ({ type: 'ADD_SEARCH_ID', id });

export const addTickets = (tickets) => ({
    type: 'SUCCESS_DOWNLOAD_TICKETS',
    tickets,
});

export const completeDownload = () => ({ type: 'COMPLETE_DOWNLOAD' });

export const failDownload = () => ({ type: 'FAIL_DOWNLOAD_TICKETS' });

export const doubleFailDownload = () => ({ type: 'REPEATED_FAIL_DOWNLOAD' });

export const completeFail = () => ({ type: 'COMPLETE_FAIL' });

export const addFiveTickets = () => ({ type: 'ADD_FIVE_TICKETS' });

export const performFiltering = (ticketList, filters, sort) => {
    const result = sortTickets(filterTickets(ticketList, filters), sort);

    return { type: 'PERFORM_FILTERING', result };
};

export const changeSortValue = (value) => ({
    type: 'CHANGE_SORT_VALUE',
    value,
});
