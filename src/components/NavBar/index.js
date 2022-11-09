import React from  'react'
import { Link } from  'react-router-dom'
import './NavBar.css'
import setColor from './btns_color.js'

const NavBar = () => {

    const mmm = (name) => {
        setColor(name)
    }

    return(
        <div className="NavBarBody">
            <Link className='link_navbar home_btn' to="/" id='Home' onClick={() => mmm('Home')}><strong>Home</strong></Link>
            <Link className='link_navbar' to="/Pendentes" id='Pendentes' onClick={() => mmm('Pendentes')}><strong>Pendentes</strong></Link>
            <Link className='link_navbar' to="/Finalizados" id='Finalizados' onClick={() => mmm('Finalizados')}><strong>Finalizados</strong></Link>
            <Link className='link_navbar' to="/Cancelados" id='Cancelados' onClick={() => mmm('Cancelados')}><strong>Cancelados</strong></Link>
        </div>
    )
}

export default NavBar