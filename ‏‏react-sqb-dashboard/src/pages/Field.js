import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import FieldRow from "../components/FieldRow"
import FieldAddModal from "../components/FieldAddModal"

function Field() {
  const { fields } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Fields</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 20, marginBottom: 10,backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} onClick={() => setShow(true)} >
          <AddIcon />Fields
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead style={{backgroundColor:"#A98261"}}>
          <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "40%" }}>typeField</th>
            <th style={{ width: "40%" }}>Photo</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fields.map(field => (
            <FieldRow key={field._id} field={field} />
          ))}
        </tbody>
      </Table>
      <FieldAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Field
