// import { Link } from "@mui/material"
// import { useContext } from "react"
// import { Button, Card, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
// import { useParams } from "react-router-dom"
// import SQBContext from "../utils/SQBContext"

// function OrderAddModal(props) {
//   const { show, setShow,} = props
//   const { addOrder,companise } = useContext(SQBContext)
  
//   return (
//     <Modal show={show} onHide={() => setShow(false)}>
//       <Form onSubmit={addOrder}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Order</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column md="3">
//                Namep
//             </Form.Label>
//             <Col md="8">
//               <Form.Control name="nameP" type="text" required />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column md="3">
//             descriptionP
//             </Form.Label>
//             <Col md="8">
//               <Form.Control name="descriptionP" type="text" required />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column md="3">
//             posterP
//             </Form.Label>
//             <Col md="8">
//               <Form.Control type="url" name="posterP" required />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column md="3">
//             areaP
//             </Form.Label>
//             <Col md="8">
//               <Form.Control type="number" name="areaP" required />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column md="3">
//             LocationP
//             </Form.Label>
//             <Col md="8">
//             <Form.Control type="text" name="LocationP" required />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column md="3">
//             LocationP
//             </Form.Label>
//             <Form.Group as={Row} className="mb-5">
//             <Form.Label column md="5">
//              companise
//             </Form.Label>
//             <Col md="15" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
//               {companise.map(company => (
//                 <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
//                   <Col md="2">
//                     <Form.Check type="radio" name="companyid" value={company._id} />
//                   </Col>
//                   <Col md="7">
//                     <Image src={company.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
//                     <span style={{ marginLeft: 10 }}>
//                       {company.nameCompany} 
//                     </span>
//                   </Col>
//                 </Row>
//               ))}
//             </Col>
//           </Form.Group>
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Close
//           </Button>
//           <Button variant="primary" type="submit" onClick={() => setShow(false)}>
//             Add Order
//           </Button>
//         </Modal.Footer>
//       </Form>
//     </Modal>
//   )
// }

// export default OrderAddModal