import { margin } from "@mui/system";
import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function OrderViewModal(props) {
  const { show, setShow, order } = props
  console.log(order.companyid);
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>name:</strong> {order.nameP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>description:</strong> {order.descriptionP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>poster:</strong>{" "}
            <img src={order.posterP} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>area:</strong> {order.areaP}
          </ListGroup.Item>
          <ListGroup.Item>
          <strong>Location:</strong> {order.LocationP}
          </ListGroup.Item>
          <ListGroup.Item>
          
            <strong >Company:</strong>
          <img src={order.companyid?.photo} style={{  height: "60px",clipPath: "circle()" }}/> 
          {order.companyid?.nameCompany}  
        
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderViewModal
