import React from 'react'

import "./styles.sass"

export default props => <button className="primary" {...props}>{props.children}</button>
export const SecondaryButton = props => <button className="secondary" {...props}>{props.children}</button>
export const TerciaryButton = props => <button className="terciary" {...props}>{props.children}</button>