import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import OrderAddModal from "../components/OrderAddModal"
import OrderEmployeRow from "../components/OrderEmployeRow"

function OrderEmployee() {
  const { profile } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  console.log(profile?.orders);
  return (
    <>
      <h1 style={{ marginTop: 30,marginBottom: 30}}>Orders</h1>
     
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead style={{backgroundColor:"#A98261"}}>
        <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "10%" }}> name Project</th>
            <th style={{ width: "18%" }}>description Project</th>
            <th style={{ width: "15%" }}>poster Project</th>
            <th style={{ width: "9%" }}>area Project</th>
            <th style={{ width: "15%" }}>Location Project</th>
            <th style={{ width: "25%" }}> Project</th>
          </tr>
        </thead>
        <tbody>
          {profile?.orders?.map(order => (
            <OrderEmployeRow key={order._id} order={order} />
          ))}
        </tbody>
      </Table>
     
    </>
  )
}

export default OrderEmployee

