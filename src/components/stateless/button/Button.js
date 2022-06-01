import React from 'react'

const button = (props) => {
    return (
        <>
            <button className={`btn ${props.typeBtn}`} type={props.type}
                onClick={props.click}>{props.children}
            </button>
        </>
    )
}

export default button
