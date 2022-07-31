import React, { Component } from "react"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import ResultCard from "./ResultCard"

import "./styles.sass"

export default class Search extends Component
{
    state = {
        results: [
            {
                long: "https://www.frontendmentor.io",
                short: "https://rel.ink/xae3f2"
            },
            {
                long: "https://twitter/frontendmentor",
                short: "https://rel.ink/Djdn2a"
            },
            {
                long: "https://www.linkedin.com/company/frontend-mentor",
                short: "https://rel.ink/pOmcd3"
            }
        ]
    }

    render () {
        return (
            <div className="search">
                <div className="wrapper">
                    <form className="error">
                        <div className="input-wrapper">
                            <input type="text" placeholder="Shorten a link here..." />
                            <div className="error-msg">Please add a link</div>
                        </div>
                        <Button>shorten it!</Button>
                    </form>
                </div>
                <div className="results">
                    <List items={this.state.results} itemHandler={(item, index) => <ResultCard key={index} {...item} />} />
                </div>
            </div>
        )
    }
}