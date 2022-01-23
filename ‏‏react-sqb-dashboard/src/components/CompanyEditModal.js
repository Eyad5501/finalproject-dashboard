import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function CompanyEditModal(props) {
  const { show, setShow, company } = props
  const { fields, editCompany } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editCompany(e, company._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            NameCompany
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="nameCompany" defaultValue={company.nameCompany}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={company.photo}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
         
            <Form.Label column md="3" className="mb-3">
            Fields
            </Form.Label>
          
            <Col md="20" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              { fields.map(field => (
                <Row style={{ height: 50, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="checkbox" name="fields" value={field._id} 
                                          defaultChecked={company.fields.find(cfield => cfield._id === field._id)}
                                          />
                  </Col>
                  <Col >
                    <Image src={field.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {field.typeField} 
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
          <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} variant="success" type="submit" onClick={() => setShow(false)}>
          Edit Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CompanyEditModal