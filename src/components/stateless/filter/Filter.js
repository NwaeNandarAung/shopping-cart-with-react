import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../stateful/home/home.module.css'

const filter = (props) => {
    return (
        <>
            <Row className={styles.background}>
                <Col md={4} sm={4} xs={4}>
                    <div className={styles.text}>
                        Véhicules : 100
                    </div>
                </Col>
                <Col md={4} sm={4} xs={4}>
                    <select value={props.brand} className="form-control" onChange={props.filterVehicleHandler}>
                        <option value="">All</option>
                        <option>Mercedes</option>
                        <option>Toyota</option>
                        <option>Nissan</option>
                    </select>
                </Col>
                <Col md={4} sm={4} xs={4}>
                    <select value={props.sort} className="form-control" onChange={props.sortVehicleHandler}>
                        <option>All</option>
                        <option>Lowest</option>
                        <option>Highest</option>
                    </select>
                </Col>
            </Row>
        </>
    )
}

export default filter
