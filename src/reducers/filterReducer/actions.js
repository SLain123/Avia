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

const activateBox = (checkboxes, id) => {
    const setStatusForEachResult = setStatusForEach(checkboxes, id);
    const checkboxesResult = checkAllBoxes(setStatusForEachResult, id);
    const filterListResult = getActiveBoxList(checkboxesResult);

    return {
        type: 'ACTIVATE_CHECKBOX',
        checkboxesResult,
        filterListResult,
    };
};

export default activateBox;
