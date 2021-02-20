import React from 'react';
import logo from './Logo.svg';

import classes from './Header.module.scss';

const Header = () => (
    <header className={classes.header}>
        <img alt='logo' src={logo} />
    </header>
);

export default Header;

// className={classes.logo}
