import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from '../../../stateful/home/home.module.css'
import Button from '../../button/Button'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

class Vehicle extends Component {
    state = {
        vehicle: null
    }

    openModalHandler = (vehicle) => {
        this.setState({
            vehicle
        })
    }

    closeModalHandler = (event) => {
        // alert(event.target.innerHTML)
        if (event.target.innerHTML === "Add to Cart") {
            this.state.vehicle.addToCart();
            this.setState({
                vehicle: null
            })
        } else {
            this.setState({
                vehicle: null
            })
        }
    }
    render() {
        return (
            <>
                <Col lg={this.props.lg} md={6} sm={6} xs={6} className={styles.margin}>
                    <Zoom>
                        <Image src={this.props.image} thumbnail id="cursor"
                            onClick={() => this.openModalHandler(this.props)} />

                        <div className="product-price">
                            <div>$ {this.props.price}</div>
                            <Button typeBtn="btn-success" click={this.props.addToCart}>+ cart</Button>
                        </div>
                    </Zoom>

                    {this.state.vehicle && (
                        <Modal isOpen={true} onRequestClose={this.closeModalHandler}>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-md-12">
                                        <Button typeBtn="btn-danger close-modal" click={this.closeModalHandler}>X</Button>
                                        <div className="row">
                                            <Image src={this.state.vehicle.image}></Image>
                                        </div>
                                        <h3>{`Price : $ ${this.state.vehicle.price}`}</h3>
                                        <p>{`Model Description : ${this.state.vehicle.description}`}</p>
                                        <Button typeBtn="btn-success w-100" click={this.closeModalHandler}>Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    )}
                </Col>
            </>
        )
    }
}

export default Vehicle
