import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function FieldeDeleteModal(props) {
  const { deleteField } = useContext(SQBContext)
  const { show, setShow, fieldid  } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Fielde</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this fielde ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}onClick={() => deleteField(fieldid )}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FieldeDeleteModal
