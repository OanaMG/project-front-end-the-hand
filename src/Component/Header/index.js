import React from 'react';
import css from './header.module.css';


function Header() {
    return (
        <div className={css.header}>
            <h1 className={css.title}>BOOKAVO</h1>
            <h2>Experiencing your city through food.</h2>
        </div>
    )
}



export default Header;

