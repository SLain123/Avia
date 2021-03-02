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

const performFiltering = (ticketList, filterList) => {
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

const ticketsReducer = (state, action) => {
    if (state === undefined) {
        return {
            ticketList: [],
            filtredList: [],
            howTickets: 5,
            searchId: null,
            onLoad: true,
            onFail: false,
            onComplite: false,
            sort: 'cheap',
        };
    }

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
