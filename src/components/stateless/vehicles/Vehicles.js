import React from 'react'
import Vehicle from './vehicle/Vehicle'

const vehicles = (props) => {
    return (
        <>
            {
                props.cars.map((car) => {
                    return (
                        <Vehicle price={car.price} image={car.image}
                            description={car.description} key={car._id}
                            addToCart={() => props.addToCart(car)} lg={props.lg}>
                        </Vehicle>
                    )
                })
            }
        </>
    )
}

export default vehicles
