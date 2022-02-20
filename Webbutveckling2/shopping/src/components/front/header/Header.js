import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return(
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        MaxDan
                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>Album</Link>
                    </li>
                    <li>
                        <Link to='/'>Erbjudande</Link>
                    </li>
                    <li>
                        <Link to='/'>Julklappar</Link>
                    </li>
                    <li>
                        <Link to='/'>Nyheter</Link>
                    </li>
                    <li>
                        <Link to='/'>Topplistor</Link>
                    </li>

                </ul>
            </div>
            <div>
                <button className='kundkorg'>Kundkorg</button>
            </div>
        </header>
    )
};

export default Header;