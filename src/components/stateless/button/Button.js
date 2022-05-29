import React from 'react'

const button = (props) => {
    return (
        <>
            <button className={`btn ${props.typeBtn}`} type={props.type}>{props.children}</button>
        </>
    )
}

export default button
