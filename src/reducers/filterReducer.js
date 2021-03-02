const setStatusToMain = (checkboxes, status) =>
    checkboxes.map((checkbox) => {
        if (checkbox.htmlForId === 'all') {
            return {
                ...checkbox,
                checked: status,
            };
        }
        return checkbox;
    });

const setStatusForEach = (checkboxes, id) => {
    if (id === 'all') {
        const currentStatus = !checkboxes[0].checked;
        const newFilters = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: currentStatus,
        }));
        return newFilters;
    }

    const newFilters = checkboxes.map((checkbox) => {
        if (checkbox.htmlForId === id) {
            const currentStatus = checkbox.checked;
            return {
                ...checkbox,
                checked: !currentStatus,
            };
        }
        return checkbox;
    });

    return newFilters;
};

const checkAllBoxes = (checkboxes, id) => {
    if (id === 'all') {
        return checkboxes;
    }

    let withoutMain = true;
    checkboxes.forEach((checkbox, indx) => {
        if (indx === 0) {
            return;
        }
        if (!checkbox.checked) {
            withoutMain = false;
        }
    });

    if (withoutMain) {
        return setStatusToMain(checkboxes, true);
    }
    return setStatusToMain(checkboxes, false);
};

const getActiveBoxList = (checkboxes) => {
    const result = [];
    checkboxes.forEach(({ checked, filter }) => {
        if (checked) {
            result.push(filter);
        }
    });

    return result;
};

const filterReducer = (state, action) => {
    if (state === undefined) {
        return {
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
    }

    switch (action.type) {
        case 'ACTIVATE_CHECKBOX':
            return {
                ...state,
                checkboxes: setStatusForEach(state.checkboxes, action.id),
            };
        case 'CHECK_ALL_CHECKBOXES':
            return {
                ...state,
                checkboxes: checkAllBoxes(state.checkboxes, action.id),
            };
        case 'GET_ACTIVE_CHECKBOX_LIST':
            return {
                ...state,
                filterList: getActiveBoxList(state.checkboxes),
            };
        default:
            return state;
    }
};

export default filterReducer;
