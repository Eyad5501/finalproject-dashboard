import {useContext} from "react"
import SQBContext from "../utils/SQBContext"
import {Container } from "react-bootstrap"
import ProfileCompanyRow from "../components/ProfileCompanyRow"
import"./ProfileCompany.css"


function ProfileCompany() {
  const { profile } = useContext(SQBContext)

  if (!profile) return <h1>Loading...</h1>
  return (
    
    
    <Container className="Ap">
       <h1 className="pp"style={{ marginTop: 10,backgroundColor:"#A98261" }}>ProfileCompany</h1>
       <div className="pp">
        
     
       
          <img variant="top" src={profile.photo} width="25%" style={{ borderRadius: "6px", margin: "auto",marginLeft:"50px",marginBottom:"10px" }}  />
          <h1 className="name1">{profile.nameCompany}</h1>
          <p className="name">{profile.email}</p>
          <  ProfileCompanyRow key={profile.company} profilecompany={profile.company} />
          </div>
    </Container>
  )
}
export default ProfileCompany


