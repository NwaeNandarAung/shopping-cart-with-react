import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from '../../stateless/filter/Filter'
import Vehicles from '../../stateless/vehicles/Vehicles'
import Cart from '../../stateless/cart/Cart'
import Button from '../../stateless/button/Button'
import Form from '../../stateless/form/Form'
import styles from './home.module.css'
import image1 from '../../../images/car1.jpg'
import image2 from '../../../images/car2.jpg'
import image3 from '../../../images/car3.jpg'
import image4 from '../../../images/car4.jpg'
import image5 from '../../../images/car5.jpg'
import image6 from '../../../images/car6.jpg'
import image7 from '../../../images/car7.jpg'
import image8 from '../../../images/car8.jpg'
import image9 from '../../../images/car9.jpg'
import image10 from '../../../images/car10.jpg'
import image11 from '../../../images/car11.jpg'
import image12 from '../../../images/car12.jpg'


class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={8}>
                            {/* start of filter */}
                            <Filter />
                            {/* end of filter */}
                            <hr />

                            {/* start of cars */}
                            <Row>
                                <Vehicles image={image1} />
                                <Vehicles image={image2} />
                                <Vehicles image={image3} />
                                <Vehicles image={image4} />
                                <Vehicles image={image5} />
                                <Vehicles image={image6} />
                                <Vehicles image={image7} />
                                <Vehicles image={image8} />
                                <Vehicles image={image9} />
                                <Vehicles image={image10} />
                                <Vehicles image={image11} />
                                <Vehicles image={image12} />
                            </Row>
                            {/* end of cars */}
                        </Col>

                        <Col lg={4}>
                            {/* start of cart heading */}
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <h6 className={styles.margincart}>You have 2 product (s) in cart</h6>
                                </Col>
                            </Row>
                            {/* end of cart heading */}
                            <hr />
                            {/* start of cart */}
                            <Row>
                                <Cart image={image1}></Cart>
                                <Cart image={image9}></Cart>
                            </Row>
                            <hr />

                            <Row>
                                <Col md={12} sm={12} xs={12}>
                                    <div className="product-price">
                                        <div>Total : </div>
                                    </div>
                                </Col>
                                <Col md={12} sm={12} xs={12}>
                                    <div className="product-price">
                                        <Button typeBtn="btn-success w-100">Order</Button>
                                    </div>
                                </Col>
                            </Row>
                            {/* end of cart */}

                            <hr />

                            {/* start of client form*/}
                            <Row>
                                <Form/>
                            </Row>
                            {/* end of client form*/}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home

