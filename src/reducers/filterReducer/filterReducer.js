const initState = {
    filterList: ['all'],
    checkboxes: [
        {
            lable: 'Все',
            checked: true,
            htmlForId: 'all',
            filter: 'all',
        },
        {
            lable: 'Без пересадок',
            checked: true,
            htmlForId: 'without',
            filter: 0,
        },
        {
            lable: '1 пересадка',
            checked: true,
            htmlForId: 'one',
            filter: 1,
        },
        {
            lable: '2 пересадки',
            checked: true,
            htmlForId: 'two',
            filter: 2,
        },
        {
            lable: '3 пересадки',
            checked: true,
            htmlForId: 'three',
            filter: 3,
        },
    ],
};

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ACTIVATE_CHECKBOX':
            return {
                ...state,
                checkboxes: action.checkboxesResult,
                filterList: action.filterListResult,
            };
        default:
            return state;
    }
};

export default filterReducer;
