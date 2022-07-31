import React, { useState } from "react"
import useFetch from "../../../hooks/useFetch"
import Button from "../../../UI/Button"
import List from "../../../UI/List"
import Spinner from "../../../UI/Spinner"
import ResultCard from "./ResultCard"

import "./styles.sass"

const resultsB = [
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

export default () => {

    const [ urlError, setUrlError ] = useState(null)
    let [ term, setTerm ] = useState("")

    const api = "https://api.shrtco.de/v2/shorten?url="

    const url = api + term

    const { data, isLoading, error } = useFetch(url)

    if (error) setUrlError("Network error")

    const searchHandler = e => {
    
        term = e.target.value
        
        if (term) {
            
            setTerm(term)
            
            console.log(data)

        } else setUrlError("Please add a link")

    }
    

    return (
        <div className="search">
            <div className="wrapper">
                <form className={`${urlError ? "error" : "" }`}>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Shorten a link here..." onChange={searchHandler} />
                        {urlError ? <div className="error-msg">{urlError}</div> : null}
                    </div>
                    <Button>shorten it!</Button>
                </form>
            </div>
            <div className="results">
                {
                    isLoading ? 
                    <Spinner /> : "results"
                    // <List items={this.state.results} itemHandler={(item, index) => <ResultCard key={index} {...item} />} />
                }
            </div>
        </div>
    )
}