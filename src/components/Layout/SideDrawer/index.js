import React, { Fragment } from "react"
import Backdrop from "../../UI/Backdrop"
import Button, { TerciaryButton } from "../../UI/Button"
import NavLinks from "../../UI/NavLinks"

import "./styles.sass"

export default ({ isOpen, toggleHandler }) => isOpen ? (
    <Fragment>
        <Backdrop isOpen={isOpen} onClick={toggleHandler} />
        <div className="side-drawer">
            <div className="container">
                <div className="wrapper">
                    <NavLinks />
                    <div className="user-buttons">
                        <TerciaryButton>login</TerciaryButton>
                        <Button>sign up</Button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
) : null