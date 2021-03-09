import { sortTickets, performFiltering } from './funcForReducer';

const initState = {
    ticketList: [],
    filtredList: [],
    howTickets: 5,
    searchId: null,
    onLoad: true,
    onFail: false,
    onComplite: false,
    sort: 'cheap',
};

const ticketsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SUCCESS_DOWNLOAD_TICKETS':
            return {
                ...state,
                onLoad: false,
                ticketList: [...state.ticketList, ...action.tickets],
            };
        case 'COMPLETE_DOWNLOAD':
            return { ...state, onComplite: true };
        case 'FAIL_DOWNLOAD_TICKETS':
            return { ...state, onFail: state.onFail + 1 };
        case 'COMPLETE_FAIL':
            return { ...state, onLoad: false, onComplite: true };
        case 'ADD_SEARCH_ID':
            return { ...state, searchId: action.id };
        case 'ADD_FIVE_TICKETS':
            return { ...state, howTickets: state.howTickets + 5 };
        case 'PERFORM_FIRST_SORT':
            return {
                ...state,
                filtredList: sortTickets(state.ticketList, action.value),
            };
        case 'PERFORM_SORT':
            return {
                ...state,
                filtredList: sortTickets(state.filtredList, action.value),
                sort: action.value,
            };
        case 'PERFORM_FILTERING': {
            return {
                ...state,
                filtredList: sortTickets(
                    performFiltering(state.ticketList, action.filters),
                    state.sort,
                ),
            };
        }
        default:
            return state;
    }
};

export default ticketsReducer;
