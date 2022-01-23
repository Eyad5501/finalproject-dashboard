import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"


function CompanyViewModal(props) {
  const { show, setShow} = props
  const { fields, addCompany } = useContext(SQBContext)
  if (!fields.length) return null
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCompany}>
        <Modal.Header closeButton>
          <Modal.Title>Add Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              nameCompeny
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="nameCompany" required />
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
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-5">
            <Form.Label column md="5">
            Fields
            </Form.Label>
            <Col md="25" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
            {fields.map(fieldObject => (
                <Row style={{ height: 60, display: "flex", alignItems: "center" }}>
                  <Col md="1">
                  <Form.Check type="checkbox" name="fields" value={fieldObject._id} />
                  </Col>
                  <Col md="7">
                    <Image src={fieldObject.photo} roundedCircle height={30} width={30} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                    {fieldObject.typeField}
                    </span>

                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}  type="submit" onClick={() => setShow(false)}>
            Add Company
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CompanyViewModal
