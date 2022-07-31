import React from 'react'
import Button, { SecondaryButton, TerciaryButton } from '../../UI/Button'
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
                <TerciaryButton>login</TerciaryButton>
                <Button>sign up</Button>
            </div>
            <SideDrawerToggler 
                toggleHandler={props.sideDrawerToggleHandler} 
                isOpen={props.sideDrawerIsOpen}
            />
        </div>
    </header>
)