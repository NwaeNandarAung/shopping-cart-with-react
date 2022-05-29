import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../stateful/home/home.module.css'

const filter = () => {
    return (
        <>
            <Row className={styles.background}>
                <Col md={4} sm={4} xs={4}>
                    <div className={styles.text}>
                        Véhicules : 100
                    </div>
                </Col>
                <Col md={4} sm={4} xs={4}>
                    <select className="form-control">
                        <option>Tout</option>
                        <option>Mercedes</option>
                        <option>Toyota</option>
                        <option>Mazda</option>
                    </select>
                </Col>
                <Col md={4} sm={4} xs={4}>
                    <select className="form-control">
                        <option>Tout</option>
                        <option>Moins chère</option>
                        <option>Chère</option>
                        <option>Très Chère</option>
                    </select>
                </Col>
            </Row>
        </>
    )
}

export default filter
