import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function AdminAddModal(props) {
  const { show, setShow } = props
  const { addAdmin } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addAdmin}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phone" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}type="submit" onClick={() => setShow(false)}>
            Add Admin
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AdminAddModal
