import React from 'react'
import './Button.css'

export default (props) => {
    return(
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
                button
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
                ${props.operation ? 'operation' : ''}
            `}>
            {props.label}
        </button>
    )
}