import React from 'react'

export default ({ name }, rest) => (
    <div className={`icon linearicons-${name}`} {...rest}></div>
)