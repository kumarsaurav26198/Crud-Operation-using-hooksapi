import React from 'react';
import "./Menu.scss";


function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href='#create'>Create</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href='#read'>Read</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href='#work'>Work</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href='#testimonials'>Testimonils</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;