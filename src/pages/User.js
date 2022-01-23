import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
import AdminAddModal from "../components/AdminAddModal"
import UserAddModal from"../components/UserAddModal"

function User() {
  const { users } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  const [Ushow, setUShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 20, marginBottom: 10, backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} onClick={() => setShow(true)} >
          <AddIcon/> Add Admin
        </Button>
        <Button style={{ marginRight: 20, marginBottom: 10 ,backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert"}} onClick={() => setUShow(true)} >
          <AddIcon/> Add User
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead style={{backgroundColor:"#A98261"}}>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "16%" }}>Full Name</th>
            <th style={{ width: "15%" }}>phone</th>
            <th style={{ width: "15%" }}>Email</th>
            <th style={{ width: "18%" }}>Avatar</th>
            <th style={{ width: "9%" }}>Role</th>
            <th style={{ width: "36%" }}>Project</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal show={show} setShow={setShow} />
      <UserAddModal show={Ushow} setShow={setUShow} />
    </>
  )
}

export default User
