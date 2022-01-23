import { useState,useContext } from "react"
import { Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import ProfileCompanyEditModal from "./ProfileCompanyEditModal"
import EditRoadIcon from '@mui/icons-material/EditRoad';

function ProfileCompanyRow() {
  const { profile } = useContext(SQBContext)
 


  const [editShow, setEditShow] = useState(false)

  return (
    
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      {/* <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{profile.nameCompany}</td>
      {/* <td>
        <img src={profile.photo} style={{ objectFit: "contain", height: "50px", width: "50%" }} />
      </td>
      <td>{profile.email}</td> */}
      <td> 
        <Button style={{ backgroundColor:"#797978",width:"100%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setEditShow(true)}>
        <EditRoadIcon/> Edit
        </Button>
      
      </td>
     
      <ProfileCompanyEditModal show={editShow} setShow={setEditShow} company={profile} />
    </tr>
  )
}

export default ProfileCompanyRow
