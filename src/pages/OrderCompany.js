import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import OrderCompanyRow from "../components/OrderCompanyRow"

function OrderCompany() {
  const { profile } = useContext(SQBContext)
  
  return (
    <>
      <h1 style={{ marginTop: 80,marginBottom:30 }}>Orders</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead style={{backgroundColor:"#A98261"}}>
          <tr>
            <th style={{ width: "16%" }}>#</th>
            <th style={{ width: "15%" }}>Customer name</th>
            <th style={{ width: "15%" }}>Order</th>
            <th style={{ width: "18%" }}>Feild</th>
            <th style={{ width: "25%" }}>OrdersCompany</th>
          </tr>
        </thead>
        <tbody>
          { profile.orders.map(order => (
            <OrderCompanyRow key={order._id} order={order} />
          ))}
        </tbody>
    
      </Table>
  
    </>
  )
}

export default OrderCompany

