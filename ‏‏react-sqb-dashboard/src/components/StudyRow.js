import { useState,useContext } from "react"
import { Button } from "react-bootstrap"
import StudyViewModal from "./StudyViewModal"
import StudyCompanyViewModal from "./StudyCompanyViewModal "
import StudyOrderViewModal from "./StudyOrderViewModal"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import SQBContext from "../utils/SQBContext"
import {HiOutlineViewGrid} from "react-icons/hi"

function StudyRow(props) {
  const { study } = props
 
  const [viewUShow, setViewUShow] = useState(false)
  const [viewCShow, setViewCShow] = useState(false)
  const [viewOShow, setViewOShow] = useState(false)
  const { setOrderCompany } = useContext(SQBContext)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{study._id}</td>
      <td><a href={study.study} style={{ backgroundColor:"#797978",width:"50%",borderRadius:"4px",padding:"6px ", borderColor:"revert",textDecoration: "none" ,color: "white"}} ><MenuBookIcon/> view study</a></td>
      <td> <Button style={{ backgroundColor:"#797978",width:"50%",borderRadius:"4px",padding:"6px ", borderColor:"revert", }} className="me-2" onClick={() => setViewUShow(true)}>
      <HiOutlineViewGrid/> ViewUser
        </Button>
         </td>
        <td> <Button style={{ backgroundColor:"#797978",width:"80%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }}className="me-2" onClick={() => setViewCShow(true)}>
        <HiOutlineViewGrid/> ViewCompany
        </Button> 
        </td>
        <td> <Button style={{ backgroundColor:"#797978",width:"70%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewOShow(true)}>
        <HiOutlineViewGrid/> ViewOrder
        </Button> </td>
        
     
      <StudyViewModal show={viewUShow} setShow={setViewUShow} study={study} />
      <StudyCompanyViewModal show={viewCShow} setShow={setViewCShow} study={study} />
      <StudyOrderViewModal show={viewOShow} setShow={setViewOShow} study={study}  />
    </tr>
  )
}

export default StudyRow
