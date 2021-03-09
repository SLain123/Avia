const makeActiveBtn = (btns, id) =>
    btns.map((btn) => {
        if (btn.id === id) {
            return {
                ...btn,
                isActive: true,
            };
        }
        return {
            ...btn,
            isActive: false,
        };
    });

export default makeActiveBtn;
