import { useContext } from "react"
import { Button, Col, Form,  Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function FieldeEditModal(props) {
  const { show, setShow, field } = props
  const { editField } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editField(e,field._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit fielde</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            TypeField
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="typeField" defaultValue={field.typeField}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
               Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={field.photo}  />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default FieldeEditModal
