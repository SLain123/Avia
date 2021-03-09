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

export const performSort = () => ({ type: 'PERFORM_SORT' });

export const performFiltering = () => ({ type: 'PERFORM_FILTERING' });

export const changeSortValue = (value) => ({
    type: 'CHANGE_SORT_VALUE',
    value,
});

export const changeFilterValue = (value) => ({
    type: 'CHANGE_FILTER_VALUE',
    value,
});
