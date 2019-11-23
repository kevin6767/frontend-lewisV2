import React from 'react'
import './top.module.scss'

const onClick = e => {
    e.preventDefault()
    alert(`dirka dirka`)
}

const Top = () =>
    <div {...{
        className: 'red cursor-pointer',
        onClick
    }}>
        <h2>Hello World this should be red (click me)</h2>
    </div>

export default Top
