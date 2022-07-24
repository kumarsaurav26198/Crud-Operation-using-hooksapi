import React from 'react';
import "./Topbar.scss";

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#create" className='logo'>React Crud Operation</a>
                   
                </div>
                <div className="right">
                    <div className="hambarger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
