import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function OrderEditModal(props) {
  const { show, setShow, order } = props
  const { editOrder } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editOrder(e,order._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-4" >
            <Form.Label column md="3">
               Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="nameP" type="text"defaultValue={order.nameP} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="3">
            Description
            </Form.Label>
            <Col md="8">
              <Form.Control name="descriptionP" type="text" defaultValue={order.descriptionP} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="3">
            poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="posterP" defaultValue={order.posterP} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="3">
            area
            </Form.Label>
            <Col md="8" >
              <Form.Control type="number" name="areaP" defaultValue={order.areaP} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="3">
            Location
            </Form.Label>
            <Col md="8" >
            <Form.Control type="text" name="LocationP" defaultValue={order.LocationP} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button style={{ backgroundColor:"#797978",width:"30%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} type="submit" onClick={() => setShow(false)}>
            Edit Order
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default OrderEditModal
