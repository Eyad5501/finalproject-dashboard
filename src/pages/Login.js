import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import pexelsLogin from "../assets/pexels-Login.jpg"
import video from "../assets/login.mp4"

function Login() {
  const { login } = useContext(SQBContext)

  return (
    <div >
    <video className="v"src={video} autoPlay muted loop />
    <div className="A">
    <img
         className="I"
         src={pexelsLogin}id="pexels-Login.jpg"
         alt="First slide"
      />


    <div className="formInput">
   <div className="formText">
      <h1>Login Admin</h1>
      <Form className="mt-5" onSubmit={login}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button  className="btn"style={{ backgroundColor:"#797978",width:"50%",borderRadius:"6px",padding:"5px",marginRight:"60px",textDecoration: "none",borderColor:"white" }} type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login
