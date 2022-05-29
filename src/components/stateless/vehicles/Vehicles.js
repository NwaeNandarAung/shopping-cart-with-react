import React from 'react'
import Vehicle from './vehicle/Vehicle'

const vehicles = (props) => {
    return (
        <>
           <Vehicle image={props.image}></Vehicle>
        </>
    )
}

export default vehicles
