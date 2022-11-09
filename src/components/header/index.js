import NavBar from '../NavBar'
import './header.css'

const Header = () => {
    return(
        <div className="headerBody">
            <div className='img_logo'>
                <img src='./images/logo_smartech.png'></img>
            </div>
            <div className='Navbar'>
                <NavBar />
            </div>
        </div>
    )
}

export default Header