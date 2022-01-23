import { red } from "@mui/material/colors"
import { useState } from "react"
import { Button } from "react-bootstrap"
import  OrderDeleteModal from "./OrderDeleteModal"
import  OrderEditModal from "./OrderEditModal"
import  OrderViewModal from "./OrderViewModal"
import {HiOutlineViewGrid} from "react-icons/hi"
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function OrderRow(props) {
  const { order } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{order._id}</td>
      <td>{order.nameP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.descriptionP}
     </td>
      <td>
        <img src={order.posterP} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.areaP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order. LocationP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.companyid?.nameCompany}</td>
    
      
      <td>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewShow(true)}>
        <HiOutlineViewGrid/> View
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"25%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setEditShow(true)}>
        <EditRoadIcon/> Edit
        </Button>
        <Button style={{ backgroundColor:"#797978",width:"30%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} onClick={() => setDeleteShow(true)}>
        <DeleteOutlineIcon/>  Delete
        </Button>
      </td>
      <OrderViewModal show={viewShow} setShow={setViewShow} order={order} />
      <OrderDeleteModal show={deleteShow} setShow={setDeleteShow} orderid={order._id} />
      <OrderEditModal show={editShow} setShow={setEditShow} order={order} />
    </tr>
  )
}

export default OrderRow