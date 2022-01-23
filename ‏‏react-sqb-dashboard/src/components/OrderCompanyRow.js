import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import OrderDeleteModal from "./OrderDeleteModal"
import OrderEditModal from "./OrderEditModal"
import OrderViewModal from "./OrderViewModal"
import {HiOutlineViewGrid} from "react-icons/hi"
import OrderCompanyEmployeModal from "./OrderCompanyEmployeModal "

function OrderCompanyRow(props) {
  const { order } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [editCEShow, setViewCEShow] = useState(false)
  const [editCOShow, setViewCOShow] = useState(false)
  const { addorderstatus }=useContext(SQBContext)

  return (
    <>
 
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{order._id}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        {order.userid?.firstName}
        {order.userid?.lastName}
      </td>{" "}
      <td>
        <Button style={{ backgroundColor:"#797978",width:"50%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewShow(true)}>
        <HiOutlineViewGrid/> View
        </Button>
        </td>
      
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        {order.fieldid.typeField}
      </td>
      <td>
      <td  style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word",width:"40%",borderRadius:"4px",padding:"6px ", borderColor:"revert", }}>
      {order.orderstatus}
      </td>
      <td><a href={order.study} style={{ backgroundColor:"#797978",width:"30%",borderRadius:"4px",padding:"6px ", borderColor:"revert",color:"white",marginLeft:"10px"}}> <HiOutlineViewGrid/> view study</a></td>

        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={()=>setViewCEShow(order._id)}>
        Accept
        </Button>
       
      </td>
      <OrderViewModal show={viewShow} setShow={setViewShow} order={order} />
      <OrderDeleteModal show={deleteShow} setShow={setDeleteShow} orderid={order._id} />
      <OrderEditModal show={editShow} setShow={setEditShow} order={order} />
      <OrderCompanyEmployeModal  show={editCEShow} setShow={setViewCEShow} order={order} />
      {/* <StudyOrderViewModal show={editCOShow} setShow={setViewCOShow} order={order} /> */}

    </tr>
       </>
  )
}

export default OrderCompanyRow
