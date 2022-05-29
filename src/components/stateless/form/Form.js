import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from '../button/Button'

const form = () => {
    return (
        <>
            <Col md={12} sm={12} xs={12}>
                <form>
                    <div className="form-group">
                        <label>Noms</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name="email" />
                    </div>
                    <div className="form-group mt-3">
                        <Button typeBtn="btn-info" type="submit">Validate</Button>
                    </div>
                </form>
            </Col>
        </>
    )
}

export default form
