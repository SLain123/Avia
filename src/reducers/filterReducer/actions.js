export const activateBox = (id) => ({ type: 'ACTIVATE_CHECKBOX', id });

export const checkBoxes = (id) => ({ type: 'CHECK_ALL_CHECKBOXES', id });

export const getActiveCheckboxesList = () => ({
    type: 'GET_ACTIVE_CHECKBOX_LIST',
});
