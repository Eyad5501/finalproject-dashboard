import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function EditProfileCompany(props) {
  const { show, setShow, company } = props
  const { editProfileCompany } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editProfileCompany(e,company._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit ProfileCompany</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
               Company
            </Form.Label>
            <Col md="8">
              <Form.Control name="nameCompany" type="text" defaultValue={company.nameCompany} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={company.email} required />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={company.photo} required />
            </Col>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}type="submit" onClick={() => setShow(false)}>
            Edit pr
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditProfileCompany
