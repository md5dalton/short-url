import React, { Fragment } from "react"
import Backdrop from "../../UI/Backdrop"
import Button from "../../UI/Button"
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
                        <Button role="terciary">login</Button>
                        <Button>sign up</Button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
) : null