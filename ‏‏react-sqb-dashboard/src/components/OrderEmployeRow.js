import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import OrderDeleteModal from "./OrderDeleteModal"
import OrderEditModal from "./OrderEditModal"
import OrderViewModal from "./OrderViewModal"
import {HiOutlineViewGrid} from "react-icons/hi"

function OrderEmployeRow(props) {
  const { order } = props
  const [viewShow, setViewShow] = useState(false)


  const { addorderstatus } = useContext(SQBContext)
  console.log(order)
  return (
    <>
       <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{order._id}</td>
      <td>{order.nameP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        {order.descriptionP}
    </td>
      <td>
        <img src={order.posterP} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.areaP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order. LocationP}</td>
      <td>
        <Button style={{ backgroundColor:"#797978",width:"35%",borderRadius:"4px",padding:"6px ", borderColor:"revert" }} className="me-2" onClick={() => setViewShow(true)}>
        <HiOutlineViewGrid/> View
        </Button>
        
      </td>
      <OrderViewModal show={viewShow} setShow={setViewShow} order={order} />
   
    </tr>
    </>
  )
}

export default OrderEmployeRow
