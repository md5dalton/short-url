import React, { Fragment } from "react"
import Backdrop from "../../UI/Backdrop"
import NavLinks from "../../UI/NavLinks"
import ThemeToggler from "../ThemeToggler"

import "./styles.sass"

export default props => props.isOpen ? (
    <Fragment>
        <Backdrop isOpen={props.isOpen} onClick={props.toggleHandler} />
        <div className="side-drawer">
            <ThemeToggler />
            <NavLinks />
        </div>
    </Fragment>
) : null