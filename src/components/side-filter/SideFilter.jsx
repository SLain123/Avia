import React from 'react';

import classes from './SideFilter.module.scss';

const SideFilter = () => {
    return (
        <div className={classes.panel}>
            <p className={classes.title}>Количество пересадок</p>
            <input type='checkbox' htmlFor='all' className={classes.checkbox} />
            <label className={classes.lable} id='all'>
                Все
            </label>
            <input
                type='checkbox'
                htmlFor='without'
                className={classes.checkbox}
                checked
            />
            <label className={classes.lable} id='without'>
                Без пересадок
            </label>
            <input
                type='checkbox'
                htmlFor='one'
                className={classes.checkbox}
                checked
            />
            <label className={classes.lable} id='one'>
                1 пересадка
            </label>
            <input
                type='checkbox'
                htmlFor='two'
                className={classes.checkbox}
                checked
            />
            <label className={classes.lable} id='two'>
                2 пересадки
            </label>
            <input
                type='checkbox'
                htmlFor='three'
                className={classes.checkbox}
            />
            <label className={classes.lable} id='three'>
                3 пересадки
            </label>
        </div>
    );
};

export default SideFilter;
