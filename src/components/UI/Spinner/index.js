import React from 'react'

import './styles.less'

export default React.forwardRef((props, ref) => (
    <div className={`spinner${props.isLoading ? ' loading' : ''}`} ref={ref}></div>
))