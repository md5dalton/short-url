import React from 'react'
import List from '../../../UI/List'

export default ({ name, links }) => (
    <div className="item links-group">
        <div className="name">{name}</div>
        <List items={links} itemHandler={(item, index) => <a key={index} href={`#${item}`}>{item}</a>} />
    </div>
)