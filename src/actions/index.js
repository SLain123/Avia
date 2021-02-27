export const activateBox = (id) => ({ type: 'ACTIVATE_CHECKBOX', id });

export const checkBoxs = (id) => ({ type: 'CHECK_ALL_CHECKBOXES', id });

export const activateBtn = (id) => ({ type: 'ACTIVATE_BTN', id });

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
