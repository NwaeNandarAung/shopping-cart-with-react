import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from '../../../stateful/home/home.module.css'
import Button from '../../button/Button'

const vehicle = (props) => {
    return (
        <>
            <Col lg={4} md={6} sm={6} xs={6} className={styles.margin}>
                <Image src={props.image} thumbnail />

                <div className="product-price">
                    <div>$ {props.price}</div>
                    <Button typeBtn="btn-success">+ cart</Button>
                </div>
            </Col>
        </>
    )
}

export default vehicle
