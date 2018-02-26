import React from 'react'

export default props => {
    if(props.hide)
        return false
    else
        return props.children
}