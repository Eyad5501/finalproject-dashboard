import { useContext,useState } from "react"
import SQBContext from "../utils/SQBContext"
import { Button,Container } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import ProfileEmployeeRow from "../components/ProfileEmployeeRow"
import"./ProfileEmployee.css"
function ProfileEmployee() {
  const { profile } = useContext(SQBContext)

  if (!profile) return <h1>Loading...</h1>
  return (
    <Container className="Ap">
         <h1 className="pp"style={{ marginTop: 10,backgroundColor:"#A98261" }}>ProfileEmployee</h1>
     
       
      
        <div className="pp" >
          <img  src={profile.photo} width="25%" style={{ borderRadius: "6px", margin: "auto",marginLeft:"50px",marginBottom:"10px" }} />
        
        {profile.company}
        
          <h1 className="name1">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="name">{profile.email}</p>
          <p>{profile.phone}</p>
          <ProfileEmployeeRow  key={profile.Employee} profileEmployee={profile.Employee} />
        
          </div>
    
     
    </Container>
  )
}

export default ProfileEmployee