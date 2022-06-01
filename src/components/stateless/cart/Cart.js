import React from 'react'
import styles from '../../stateful/home/home.module.css'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from '../button/Button'

const cart = (props) => {
    return (
        <>
            <Col md={{ span: 6, offset: 3 }} sm={3} xs={3} className={styles.marginbottom}>
                <Image src={props.image} thumbnail />
                <div className="product-qty">
                    <div>{`$ ${props.price} X ${props.count}`}</div>
                    {/* <button className="btn btn-danger"> X </button> */}
                    <Button typeBtn="btn-danger" click={props.removeFromCart}>X</Button>
                </div>
            </Col>
        </>
    )
}

export default cart

