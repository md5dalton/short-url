import React from 'react'

import "./styles.sass"

export default ({ role, type, className, id, onClick, children }) => (
    <button
        id={id}
        className={`${role ? role : "primary"}${className ? " " + className : ""}`}
        type={type}
        onClick={onClick}
    >
        {children}
    </button>
)