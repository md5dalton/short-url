import React, { useState } from "react"
import Button from "../../../../UI/Button"

import "./styles.sass"

export default ({ long, short }) => {
    
    const [copied, setCopied] = useState(null)

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(short)
            .then(() => setCopied(true))
    }
    
    return (
        <div className="item result card">
            <div className="link long">
                <div>{long}</div>
            </div>
            <div className="link short">
                <div>{short}</div>
            </div>
            <div>
                <Button onClick={copyToClipboard} className={copied ? "copied" : ""}>{copied ? "copied!" : "copy"}</Button>
            </div>
        </div>
    )
}