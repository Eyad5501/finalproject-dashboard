import { useContext } from "react"
import { Button,  Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function UserDeleteModal(props) {
  const { deleteUser } = useContext(SQBContext)
  const { show, setShow, userid } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this user ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} onClick={() => deleteUser(userid)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal
