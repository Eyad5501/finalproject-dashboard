import { useState,useContext } from "react"
import { Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import ProfileEmployeeEditModal from "./ProfileEmployeeEditModal"
import EditRoadIcon from '@mui/icons-material/EditRoad';

function ProfileEmployeeRow(props) {
  const { profile } = useContext(SQBContext)



  const [editShow, setEditShow] = useState(false)

  return (
    
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      {/* <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}> <h1 className="name">
            {profile.firstName} {profile.lastName}
          </h1></td> */}

    
        <Button style={{ backgroundColor:"#797978",width:"100%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setEditShow(true)}>
        <EditRoadIcon/> Edit
        </Button>
      

     
      <ProfileEmployeeEditModal show={editShow} setShow={setEditShow} employee={profile} />
    </tr>
  )
}

export default ProfileEmployeeRow
