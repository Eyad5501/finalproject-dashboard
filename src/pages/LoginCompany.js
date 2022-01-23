import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import pexelsLogin from "../assets/pexels-Login.jpg"
import video from "../assets/login.mp4"
import "./LoginCompany.css"

function LoginCompany() {
  const { loginCompany } = useContext(SQBContext)

  return (
    <div>
      <video className="v" src={video} autoPlay muted loop />
      <div className="A">
        <img className="I" src={pexelsLogin} id="pexels-Login.jpg" alt="First slide" />

        <div className="formInput">
          <div className="formText">
            <h1>LoginCompany</h1>
            <Form className="mt-2" onSubmit={loginCompany}>
              <Form.Group as={Row} className="mb-3 mt-7">
                <Form.Label column md="4" style={{ marginRight: "100px" }}>
                  <h4>Email</h4>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    style={{ backgroundColor: "#F4F3F0", borderColor: "gray", color: "#797978", padding: "10px 60px" }}
                    type="email"
                    name="email"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="4" style={{ marginRight: "100px" }}>
                  <h4>Password</h4>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    style={{ backgroundColor: "#F4F3F0", borderColor: "gray", color: "#797978", padding: "10px 60px" }}
                    type="password"
                    name="password"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group className="my-5" style={{ marginRight: "70px" }}>
                <Col md={{ span: 100, offset: 1 }}>
                  <span>
                    <p style={{ backgroundColor: "#797978", width: "50%", borderRadius: "6px", padding: "5px" }}>
                      <button className="btn" type="submit">
                        <h6>Login Company</h6>
                      </button>
                    </p>

                    <p
                      style={{
                        backgroundColor: "#797978",
                        width: "50%",
                        borderRadius: "4px",
                        marginBottom: "70px",
                        padding: "1px",
                      }}
                    >
                      <a className="dropdown-item btn" href="http://localhost:3000/">
                        <h6>GO Bake</h6>
                      </a>
                    </p>
                  </span>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCompany
