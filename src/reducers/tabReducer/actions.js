const makeActiveBtn = (tabs, id) =>
    tabs.map((tab) => {
        if (tab.id === id) {
            return {
                ...tab,
                isActive: true,
            };
        }
        return {
            ...tab,
            isActive: false,
        };
    });

const activateBtn = (tabs, id) => {
    const result = makeActiveBtn(tabs, id);
    return { type: 'ACTIVATE_BTN', result };
};

export default activateBtn;
