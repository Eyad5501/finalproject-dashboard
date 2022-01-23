import { useState } from "react"
import { Button } from "react-bootstrap"
import FieldeDeleteModal from "./FieldDeleteModal"
import FieldeEditModal from "./FieldEditModal"
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function FieldeRow(props) {
  const { field } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{field._id}</td>
      <td>{field.typeField}</td>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}><img src={field.photo}  style={{ objectFit: "contain", height: "100px", width: "100%" }}/></td>
      
      <td>
      <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setEditShow(true)}>
        <EditRoadIcon/> Edit
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"30%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} onClick={() => setDeleteShow(true)}>
        <DeleteOutlineIcon/>  Delete
        </Button>
      </td>
      <FieldeDeleteModal show={deleteShow} setShow={setDeleteShow} fieldid={field._id} />
      <FieldeEditModal show={editShow} setShow={setEditShow} field={field} />
    </tr>
  )
}

export default FieldeRow
