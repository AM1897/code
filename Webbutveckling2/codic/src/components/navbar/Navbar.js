import logo from '../../utils/images/Codic-logo.svg'
import './Navbar.css'


export default function Navbar() {
    return (
        <nav className='grid-container'>
            <div>
                <img src={logo} alt="Codic logotype"/>
            </div>
            <div>
                <ul className='links'>
                    <li className='links-items active'>
                        <a href="#" className='link-item-a active'>Startsida</a>
                    </li>
                    <li className='links-items'>
                        <a href="#" className='link-item-a'>Våra kurser</a>
                    </li>
                    <li className='links-items'>
                        <a href="#" className='link-item-a'>Kontakta oss</a>
                    </li>
                    <li className='links-items'>
                        <a href="#" className='link-item-a'>Om oss</a>
                    </li>
                    <li className='links-items'>
                        <a href="#" className='link-item-a'lia>Lia</a>
                    </li>
                </ul>
            </div>

            <div>
                <button className='nav-button-black'>Log in</button>
                <button className='nav-button-grey'>Sign up</button>
            </div>
        </nav>
    )
}