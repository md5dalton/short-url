import React from 'react'

import "./styles.sass"

// export default ({ role, type, className, id, onClick, children }) => (
export default ({ className, role, children, ...rest }) => (
    <button
        className={`${role ? role : "primary"}${className ? " " + className : ""}`}
        {...rest}
    >
        {children}
    </button>
)