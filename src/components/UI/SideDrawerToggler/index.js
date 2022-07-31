import React from 'react'

export default ({ toggleHandler }) => (
    <div className="sidedrawer-toggler" onClick={toggleHandler}>
        <img src="/images/icon-hamburger.svg" alt="menu" />
    </div>
)