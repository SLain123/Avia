import React from 'react';
import { useDispatch } from 'react-redux';
import { addFiveTickets } from '../../reducers/ticketsReducer/actions';

import classes from './DownloadBtn.module.scss';

const DownloadBtn = () => {
    const dispatch = useDispatch();
    return (
        <button
            type='button'
            aria-label='Загрузить дополнительные билеты'
            className={classes.btn}
            onClick={() => dispatch(addFiveTickets())}
        >
            Показать еще 5 билетов!
        </button>
    );
};

export default DownloadBtn;
