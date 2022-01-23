import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function EmployeeDeleteModal(props) {
  const { deleteEmployee } = useContext(SQBContext)
  const { show, setShow, employeeid } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this employee ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2"  onClick={() => deleteEmployee(employeeid)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EmployeeDeleteModal
