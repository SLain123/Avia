const initState = [
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

const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ACTIVATE_BTN':
            return action.tabs;
        default:
            return state;
    }
};

export default tabReducer;
