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

const tabReducer = (state, action) => {
    if (state === undefined) {
        return [
            {
                lable: 'Самый дешевый',
                aria: 'Получит список самых дешевых билетов',
                isActive: true,
                id: 'cheap',
            },
            {
                lable: 'Самый быстрый',
                aria: 'Получит список самых быстрых перелетов',
                isActive: false,
                id: 'speed',
            },
            {
                lable: 'Оптимальный',
                aria: 'Получит список оптимального соотношения цены и скорости',
                isActive: false,
                id: 'optimal',
            },
        ];
    }

    switch (action.type) {
        case 'ACTIVATE_BTN':
            return makeActiveBtn(state, action.id);
        default:
            return state;
    }
};

export default tabReducer;
