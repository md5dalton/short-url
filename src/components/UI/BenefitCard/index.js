import React from 'react'

export default ({ title, text, art }) => (
    <div className="item benefit card">
        <img src={`/images/icon-${art}.svg`} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
)