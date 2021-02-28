const setStatusToMain = (filters, status) =>
    filters.map((filter) => {
        if (filter.htmlForId === 'all') {
            return {
                ...filter,
                checked: status,
            };
        }
        return filter;
    });

const setStatusForEach = (filters, id) => {
    if (id === 'all') {
        const currentStatus = !filters[0].checked;
        const newFilters = filters.map((filter) => ({
            ...filter,
            checked: currentStatus,
        }));
        return newFilters;
    }

    const newFilters = filters.map((filter) => {
        if (filter.htmlForId === id) {
            const currentStatus = filter.checked;
            return {
                ...filter,
                checked: !currentStatus,
            };
        }
        return filter;
    });

    return newFilters;
};

const checkAllBoxes = (filters, id) => {
    if (id === 'all') {
        return filters;
    }

    let withoutMain = true;
    filters.forEach((filter, indx) => {
        if (indx === 0) {
            return;
        }
        if (!filter.checked) {
            withoutMain = false;
        }
    });

    if (withoutMain) {
        return setStatusToMain(filters, true);
    }
    return setStatusToMain(filters, false);
};

const filterReducer = (state, action) => {
    if (state === undefined) {
        return [
            {
                lable: 'Все',
                checked: true,
                htmlForId: 'all',
            },
            {
                lable: 'Без пересадок',
                checked: true,
                htmlForId: 'without',
            },
            {
                lable: '1 пересадка',
                checked: true,
                htmlForId: 'one',
            },
            {
                lable: '2 пересадки',
                checked: true,
                htmlForId: 'two',
            },
            {
                lable: '3 пересадки',
                checked: true,
                htmlForId: 'three',
            },
        ];
    }

    switch (action.type) {
        case 'ACTIVATE_CHECKBOX':
            return setStatusForEach(state, action.id);
        case 'CHECK_ALL_CHECKBOXES':
            return checkAllBoxes(state, action.id);
        default:
            return state;
    }
};

export default filterReducer;
