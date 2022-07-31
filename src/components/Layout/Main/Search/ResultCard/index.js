import React from "react"
import Button from "../../../../UI/Button"

export default ({ long, short }) => (
    <div className="item result card">
        <div className="link long">
            <div>{long}</div>
        </div>
        <div className="link short">
            <div>{short}</div>
        </div>
        <div>
            <Button>copy</Button>
        </div>
    </div>
)