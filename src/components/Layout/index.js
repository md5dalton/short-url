import React, { Fragment, Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import SideDrawer from "./SideDrawer"
import Main from "./Main"

export default class Layout extends Component
{
      
    state = {
        sideDrawerIsOpen: false,
        searchIsOpen: false
    }
    
    toggleSideDrawer = () => {
        this.setState(prevState => ({
            sideDrawerIsOpen: !prevState.sideDrawerIsOpen
        }))
    }
    
    toggleSearch = () => {
        this.setState(prevState => ({
            searchIsOpen: !prevState.searchIsOpen
        }))
    }

    render () {
        return (
            <Fragment>
                <Header 
                    sideDrawerIsOpen={this.state.sideDrawerIsOpen} 
                    searchIsOpen={this.state.searchIsOpen} 
                    searchToggleHandler={this.toggleSearch}
                    sideDrawerToggleHandler={this.toggleSideDrawer}
                />
                <SideDrawer
                    isOpen={this.state.sideDrawerIsOpen}
                    toggleHandler={this.toggleSideDrawer}
                />
                <Main />
                <Footer />
            </Fragment>
        )
    }
}