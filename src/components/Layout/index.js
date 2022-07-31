import React, { Fragment, Component } from 'react'
import BenefitCard from '../UI/BenefitCard'
import Button from '../UI/Button'
import List from '../UI/List'
import Header from "./Header"
import Footer from "./Footer"

import "./styles.sass"
import SideDrawer from './SideDrawer'

const benefits = [
    {
        title: "Brand Recognition",
        art: "brand-recognition", 
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },
    {
        title: "Detailed Records",
        art: "detailed-records", 
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        title: "Fully Customizable",
        art: "fully-customizable", 
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
]

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

    itemHandler = (item, index) => <BenefitCard key={index} {...item} />

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
                <main>
                    <section id="hero">
                        <div className="container">
                            <div className="illustration">
                                <img src="/images/illustration-working.svg" alt="working" />
                            </div>
                            <div className="text">
                                <h1>More than just shorter links</h1>
                                <p>
                                    Build your brand’s recognition and get detailed insights 
                                    on how your links are performing.
                                </p>
                                <Button>get started</Button>
                            </div>
                        </div>
                    </section>
                    <section id="middle">
                        <div className="container">
                            <div className="search">
                                <form>
                                    <input type="text" placeholder="Shorten a link here..." />
                                    <Button>shorten it!</Button>
                                </form>
                            </div>
                            <div className="stats">
                                <h2>Advanced Statistics</h2>
                                <p>
                                    Track how your links are performing across the web with our 
                                    advanced statistics dashboard.
                                </p>
                            </div>
                            <div className="benefits">
                                <List items={benefits} itemHandler={this.itemHandler} />
                            </div>
                        </div>
                    </section>
                    <section id="boost">
                        <div className="container">
                            <h2>Boost your links today</h2>
                            <Button>get started</Button>
                        </div>
                    </section>
                </main>
                <Footer />
            </Fragment>
        )
    }
}