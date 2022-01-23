import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import OrderAddModal from "../components/OrderAddModal"
import OrderRow from "../components/OrderRow"




function Order() {
  const { orders } = useContext(SQBContext)
 
  return (
    <>
    
      <h1 style={{ marginTop: 60,marginBottom:30}}>Orders</h1>
     
      <Table bordered hover style={{ tableLayout: "fixed"}}>
        <thead style={{backgroundColor:"#A98261"}}>
          <tr>
            <th style={{ width: "12%" }}>#</th>
            <th style={{ width: "10%" }}>name Project</th>
            <th style={{ width: "18%" }}>description Project</th>
            <th style={{ width: "18%" }}>poster Project</th>
            <th style={{ width: "9%" }}>area Project</th>
            <th style={{ width: "15%" }}>Location Project</th>
            <th style={{ width: "10%" }}>company</th>
            <th style={{ width: "35%" }}>Project</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <OrderRow key={order._id} order={order} />
          ))}
        </tbody>
      </Table>
  
    </>
  )
}

export default Order

