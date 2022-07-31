import React from 'react'
import List from '../../UI/List'
import Logo from '../../UI/Logo'
import LinksGroup from './LinksGroup'

import "./styles.sass"

const socialLinks = [
    "facebook",
    "twitter",
    "pinterest",
    "instagram"
]

const navLinks = [
    {
        name: "features",
        links: [
            "link shortening",
            "branded links",
            "analytics"
        ]
    },
    {
        name: "resources",
        links: [
            "blogs",
            "developers",
            "support"
        ]
    },
    {
        name: "company",
        links: [
            "about",
            "our team",
            "careers",
            "contact"
        ]
    }
]

export default () => (
    <footer>
        <div className="container">
            <div className="wrapper">
                <Logo />
                <div className="links-groups">
                <List items={navLinks} itemHandler={(item, index) => <LinksGroup key={index} {...item} />} />
                </div>
                <div className="socials">
                <List 
                    items={socialLinks} 
                    itemHandler={(item, index) => (
                        <a key={index} href={`#${item}`}>
                            <img src={`/images/icon-${item}.svg`} alt={item} />
                        </a>
                    )} 
                />
                </div>
            </div>
        </div>
    </footer>
)