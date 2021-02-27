const ticketsReducer = (state, action) => {
    if (state === undefined) {
        return {
            ticketList: [],
            howTickets: 5,
            searchId: null,
            onLoad: true,
            onFail: false,
        };
    }

    switch (action.type) {
        case 'SUCCESS_DOWNLOAD_TICKETS':
            return {
                ...state,
                ticketList: [...state.ticketList, ...action.tickets],
            };
        case 'COMPLETE_DOWNLOAD':
            return { ...state, onLoad: false };
        case 'FAIL_DOWNLOAD_TICKETS':
            return { ...state, onFail: state.onFail + 1 };
        case 'COMPLETE_FAIL':
            return { ...state, onLoad: false };
        case 'ADD_SEARCH_ID':
            return { ...state, searchId: action.id };
        case 'ADD_FIVE_TICKETS':
            return { ...state, howTickets: state.howTickets + 5 };
        default:
            return state;
    }
};

export default ticketsReducer;
