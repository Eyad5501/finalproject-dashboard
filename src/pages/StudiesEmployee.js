import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import StudyEmployeeRow from "../components/StudyEmployeeRow"
import StadyAddModal from "../components/StudyAddModal"

function Study() {
  const { profile } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  if (!profile) return <h1>Loading...</h1>
 console.log(profile);
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Studise</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10,backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert"  }} onClick={()=>setShow(true)} >
          <AddIcon /> Add Study
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead style={{backgroundColor:"#A98261"}}>
          <tr>
            <th style={{ width: "25%" }}>#</th>
            <th style={{ width: "20%" }}>study</th>
            <th style={{ width: "20%" }}>uesrid</th>
            <th style={{ width: "20%" }}>companyid</th>
            <th style={{ width: "20%" }}>orderid</th>
            <th style={{ width: "30%" }}>Set Order to company</th>
          </tr>
        </thead>
        <tbody>
          {profile.studise.map(study => (
            <StudyEmployeeRow key={study._id} study={study} />
          ))}
        </tbody>
      </Table>
      <StadyAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Study
