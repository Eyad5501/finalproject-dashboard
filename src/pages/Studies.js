import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import StudyRow from "../components/StudyRow"
import StadyAddModal from "../components/StudyAddModal"

function Study() {
  const { studise, addStudy } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Studise</h1>
      
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead style={{backgroundColor:"#A98261"}}>
          <tr>
            <th style={{ width: "25%" }}>#</th>
            <th style={{ width: "20%" }}>study</th>
            <th style={{ width: "20%" }}>uesrid</th>
            <th style={{ width: "20%" }}>companyid</th>
            <th style={{ width: "20%" }}>orderid</th>
          </tr>
        </thead>
        <tbody>
          {studise.map(study => (
            <StudyRow key={study._id} study={study} />
          ))}
        </tbody>
      </Table>
      <StadyAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Study
