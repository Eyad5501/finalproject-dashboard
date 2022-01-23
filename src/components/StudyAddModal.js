import { useContext } from "react"
import { Form, Col, Row, Button,Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function AddStudy(props) {
  const { addStudy,profile } = useContext(SQBContext)
  const { show, setShow } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
    <Form onSubmit={addStudy}>
      <Modal.Header closeButton>
        <Modal.Title>Add Study</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group as={Row} className="mb-3">
         <Form.Label column md="2">
        Stady
          </Form.Label>
         <Col md="6">
             <Form.Control type="file" accept="application/pdf" name="study"  />
        </Col>
        </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Order
            </Form.Label>
            <Col md="8">
              {profile?.orders.map(orderObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="orders" value={orderObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{orderObject.nameP}</span>
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
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} type="submit" onClick={() => setShow(false)}>
          Add Study
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
)
  
}

export default AddStudy