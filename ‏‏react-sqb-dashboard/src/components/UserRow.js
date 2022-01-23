import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteModal from "./UserDeleteModal"
import UserViewModal from "./UserViewModal"
import {HiOutlineViewGrid} from "react-icons/hi"
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function UserRow(props) {
  const { user } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>
        <img src={user.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{user.role}</td>
      <td>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewShow(true)}>
        <EditRoadIcon/>View
        </Button>
        {user.role === "User" ? (
          <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} onClick={() => setDeleteShow(true)}>
           <EditRoadIcon/> Delete
          </Button>
        ) : null}
      </td>

      <UserViewModal show={viewShow} setShow={setViewShow} user={user} />
      <UserDeleteModal show={deleteShow} setShow={setDeleteShow} userid={user._id} />
    </tr>
  )
}

export default UserRow
