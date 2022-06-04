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
        sort: "",
        cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
        isFormOpen: false
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
            cars: this.state.cars.slice().sort((a, b) => (
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

    addToCartHandler = (vehicle) => {
        const cartItems = this.state.cartItems.slice();

        let alreadyInCart = false;

        cartItems.forEach(item => {
            if (item._id === vehicle._id) {
                alreadyInCart = true;
                item.count++;
            }
        });

        if (!alreadyInCart) {
            cartItems.push({ ...vehicle, count: 1 })
        }
        this.setState({ cartItems })

        console.log(cartItems)

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    removeFromCartHandler = (vehicle) => {
        const index = this.state.cartItems.findIndex(index => {
            return index._id === vehicle._id
        })

        const cartItems = [...this.state.cartItems]
        cartItems.splice(index, 1)
        this.setState({ cartItems })

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        {
                            this.state.cartItems.length > 0 ?
                                (
                                    <>
                                        <Col lg={8}>
                                            {/* start of filter */}
                                            <Filter brand={this.state.brand}
                                                sort={this.state.sort}
                                                filterVehicleHandler={this.filterVehicleHandler}
                                                sortVehicleHandler={this.sortVehicleHandler}
                                                count={this.state.cars.length} />
                                            {/* end of filter */}
                                            <hr />

                                            {/* start of cars */}
                                            <Row>
                                                <Vehicles cars={this.state.cars} addToCart={this.addToCartHandler} lg={4} />
                                            </Row>
                                            {/* end of cars */}
                                        </Col>

                                        <Col lg={4}>
                                            {/* start of cart heading */}
                                            <Row>
                                                <Col md={{ span: 8, offset: 2 }}>
                                                    <h6 className={styles.margincart}>{`You have ${this.state.cartItems.length} product (s) in cart`}</h6>
                                                </Col>
                                            </Row>
                                            {/* end of cart heading */}
                                            <hr />

                                            {/* start of cart */}
                                            <Row>
                                                {
                                                    this.state.cartItems.map(vehicle => {
                                                        return (<Cart image={vehicle.image} count={vehicle.count}
                                                            price={vehicle.price} key={vehicle._id}
                                                            removeFromCart={() => this.removeFromCartHandler(vehicle)} />)
                                                    })
                                                }
                                            </Row>
                                            <hr />

                                            <Row>
                                                <Col md={12} sm={12} xs={12}>
                                                    <div className="product-price">
                                                        <div>Total :
                                                            {
                                                                this.state.cartItems.reduce((a, c) => a + c.
                                                                    price * c.count, 0
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={12} sm={12} xs={12}>
                                                    <div className="product-price">
                                                        <Button typeBtn="btn-success w-100"
                                                            click={() => this.setState(prevState => ({
                                                                isFormOpen: !prevState.isFormOpen
                                                            })
                                                            )}>Order</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            {/* end of cart */}

                                            <hr />

                                            {/* start of client form*/}
                                            <Row>
                                                {
                                                    this.state.isFormOpen && <Form />
                                                }
                                            </Row>
                                            {/* end of client form*/}
                                        </Col>
                                    </>
                                )
                                :
                                (
                                    <Col lg={12}>
                                        {/* start of filter */}
                                        <Filter brand={this.state.brand}
                                            sort={this.state.sort}
                                            filterVehicleHandler={this.filterVehicleHandler}
                                            sortVehicleHandler={this.sortVehicleHandler}
                                            count={this.state.cars.length} />
                                        {/* end of filter */}
                                        <hr />

                                        {/* start of cars */}
                                        <Row>
                                            <Vehicles cars={this.state.cars} addToCart={this.addToCartHandler} lg={3} />
                                        </Row>
                                        {/* end of cars */}
                                    </Col>
                                )
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home

