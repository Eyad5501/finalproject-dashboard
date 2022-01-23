import { useState } from "react"
import { Button } from "react-bootstrap"
import EmployeeDeleteModal from "./EmployeeDeleteModal"
import EmployeeEditModal from "./EmployeeEditModal"
import EmployeeViewModal from "./EmployeeViewModal"
import {HiOutlineViewGrid} from "react-icons/hi"
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function EmployeeRow(props) {
  const { employee } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
  <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{employee._id}</td>
      <td>
        {employee.firstName} {employee.lastName}
      </td>
      <td>{employee.email}</td>
      <td>
        <img src={employee.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{employee.phone}</td>
      <td>{employee.companyid?.nameCompany}</td>
       <td>
       <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewShow(true)}>
        <HiOutlineViewGrid/> View
        </Button>
        
      </td>
      <EmployeeViewModal show={viewShow} setShow={setViewShow}  employee={employee} />
      <EmployeeDeleteModal show={deleteShow} setShow={setDeleteShow}  employeeid={employee._id} />
      <EmployeeEditModal show={editShow} setShow={setEditShow}  employee={ employee} />
    </tr>
  )
}

export default EmployeeRow