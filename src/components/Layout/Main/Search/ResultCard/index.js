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

        
    // const copyToClipboard = () => {

    //     const TA = document.createElement("textarea")

    //     // textarea({style: 'top:0;left:0;position:fixed'});

    //     document.body.append(TA);

    //     TA.focus();

    //     TA.value = short;

    //     TA.select();

    //     try {
            
    //         const copy = document.execCommand('copy');
            
    //         setCopied(true)

    //         // let msg = copy ? 'Successful' : 'Failed';

    //         // alert(msg);

    //     } catch (error) {
            
    //         // alert(error);
    //         console.log(error);

    //     }

    //     TA.remove();

    // }
    
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