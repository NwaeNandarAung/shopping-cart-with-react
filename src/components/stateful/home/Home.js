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
import data from '../../../data.json'

class Home extends Component {
    state = {
        cars: data.cars,
        brand: "",
        sort: ""
    }

    filterVehicleHandler = (event) => {
        const brand = event.target.value;

        if (brand === "") {
            this.setState({
                brand,
                cars: data.cars,
            })
        } else {
            this.setState({
                brand,
                cars: data.cars.filter(
                    car => car.brand.indexOf(brand) >= 0
                )
            })
        }
    }

    sortVehicleHandler = (event) => {
        const sort = event.target.value;

        this.setState({
            sort,
            cars : this.state.cars.slice().sort((a,b) => (
                sort === "Lowest"
                ? a.price > b.price
                    ? 1
                    : -1
                : sort === "Higest"
                ? a.price < b.price
                    ? 1
                    : -1
                : a._id > b._id
                    ? 1
                    : -1
            ))
        })
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={8}>
                            {/* start of filter */}
                            <Filter brand={this.state.brand} 
                            sort={this.state.sort}
                            filterVehicleHandler={this.filterVehicleHandler} 
                            sortVehicleHandler={this.sortVehicleHandler}/>
                            {/* end of filter */}
                            <hr />

                            {/* start of cars */}
                            <Row>
                                <Vehicles cars={this.state.cars}  />
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
                                <Cart image={this.state.cars[0].image}></Cart>
                                {/* <Cart image={this.state.cars[8].image}></Cart> */}
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
                                <Form />
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

