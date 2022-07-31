import React from 'react'
import Button from '../../UI/Button'
import Logo from '../../UI/Logo'
import NavLinks from '../../UI/NavLinks'
import SideDrawerToggler from '../../UI/SideDrawerToggler'

import './styles.sass'

export default props => (
    <header>
        <div className="container">
            <Logo />
            <NavLinks />
            <div className="user-buttons">
                <Button role="terciary">login</Button>
                <Button>sign up</Button>
            </div>
            <SideDrawerToggler 
                toggleHandler={props.sideDrawerToggleHandler} 
                isOpen={props.sideDrawerIsOpen}
            />
        </div>
    </header>
)