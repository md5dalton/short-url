import React, { Component } from "react"
// import useFetch from "../../../hooks/useFetch"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import Spinner from "../../../UI/Spinner"
import ResultCard from "./ResultCard"

import "./styles.sass"

export default class Search extends Component
{
    state = {
        error: null,
        isLoading: false,
        term: "",
        results:[],
        resultsB: [
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

    searchHandler = e => {
        const term = e.target.value
        
        const api = "https://api.shrtco.de/v2/shorten?url="
        const url = api + term

        if (term) {

            this.setState({
                isLoading: true
            })

            fetch(url)
                .then(res => res.json())
                .then(data => {

                    if (!data.ok) this.setState({
                        error: data.error,
                        results: []
                    }); else {

                        const result = data.result

                        this.setState({
                            error: null,
                            results: [
                                {
                                    long: result.original_link,
                                    short: result.full_short_link
                                }
                            ]
                        })

                    }
                    
                })
                .catch(err => this.setState({
                    error: "Network error",
                    results: []
                }))
                .finally(() => this.setState({
                    isLoading: false
                }))

        } else this.setState({
            error: "Please add a link"
        })

    }
    
    render () {
        return (
            <div className="search">
                <div className="wrapper">
                    <form className={`${this.state.error ? "error" : "" }`}>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Shorten a link here..." onChange={this.searchHandler} />
                            {this.state.error ? <div className="error-msg">{this.state.error}</div> : null}
                        </div>
                        <Button>shorten it!</Button>
                    </form>
                </div>
                <div className="results">
                    {
                        this.state.isLoading ? 
                        <Spinner /> :
                        <List items={this.state.results} itemHandler={(item, index) => <ResultCard key={index} {...item} />} />
                    }
                </div>
            </div>
        )
    }
}