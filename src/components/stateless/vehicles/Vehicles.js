import React from 'react'
import Vehicle from './vehicle/Vehicle'

const vehicles = (props) => {
    return (
        <>
            {
                props.cars.map((car) => {
                    return (
                        <Vehicle price={car.price} image={car.image} key={car._id}
                            addToCart={() => props.addToCart(car)}>
                        </Vehicle>
                    )
                })
            }
        </>
    )
}

export default vehicles
