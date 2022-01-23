import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function CompanyDeleteModal(props) {
  const { deleteCompany } = useContext(SQBContext)
  const { show, setShow, companyid } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Company ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}  onClick={() => deleteCompany(companyid)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyDeleteModal
