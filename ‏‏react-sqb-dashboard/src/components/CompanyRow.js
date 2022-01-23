import { useState } from "react"
import { Button } from "react-bootstrap"
import CompanyDeleteModal from "./CompanyDeleteModal"
import CompanyEditModal from "./CompanyEditModal"
import CompanyViewModal from "./CompanyViewModal"
import {HiOutlineViewGrid} from "react-icons/hi"
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CompanyRow(props) {
  const { company } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{company._id}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{company.nameCompany}</td>
      <td>
        <img src={company.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
   
      <td>{company.ratingAverage}</td>
         <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
          {company.fields?.map(field=>
        <p>{field.typeField}</p>
        )}
</td>
      <td>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewShow(true)}>
        <HiOutlineViewGrid/> View
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setEditShow(true)}>
        <EditRoadIcon/> Edit
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}  onClick={() => setDeleteShow(true)}>
        <DeleteOutlineIcon/>Delete
        </Button>
        
      </td>
      <CompanyViewModal show={viewShow} setShow={setViewShow} company={company} />
      <CompanyDeleteModal show={deleteShow} setShow={setDeleteShow} companyid={company._id} />
      <CompanyEditModal show={editShow} setShow={setEditShow} company={company} />
    </tr>
  )
}

export default CompanyRow
