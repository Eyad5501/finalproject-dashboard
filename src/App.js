import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/SidebarAdmin"
import Orders from "./pages/Order"
import Companise from "./pages/Company"

import SQBContext from "./utils/SQBContext"
import Login from "./pages/Login"
import LoginEmployee from "./pages/LoginEmployee"
import LoginCompany from "./pages/LoginCompany"
import Users from "./pages/User"
import Fields from "./pages/Field"
import OrderCompany from "./pages/OrderCompany"
import OrderEmployee from "./pages/OrderEmployee"
import Studies from "./pages/Studies"
import SidebarCompany from "./components/SidebarCompany"
import SidebarEmployee from "./components/SidebarEmployee"
import ProfileCompany from "./pages/ProfileCompany"
import ProfileEmployee from "./pages/ProfileEmployee"
import firebase from "./utils/firebase"
import EmployeeCompany from "./pages/EmployeeCompany"
import Employee from "./pages/Employee"
import StudiesEmployee from"./pages/StudiesEmployee"

function App() {
  const [orders, setOrders] = useState([])
  const [users, setUsers] = useState([])
  const [companise, setCompanies] = useState([])
  const [employees, setEmployees] = useState([])
  const [fields, setFields] = useState([])
  const [studise, setStudies] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getOrder = async () => {
    const response = await axios.get("http://localhost:5000/api/order")
    setOrders(response.data)
  }
  const getOrderCompany = async () => {
    const response = await axios.get("http://localhost:5000/api/order")
    setOrders(response.data)
  }
  const getOrderEmployee= async () => {
    const response = await axios.get("http://localhost:5000/api/order")
    setOrders(response.data)
  }
  const getProfileCompany = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/company/profile", {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      setProfile(response.data)
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const editProfileCompany = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const orderBody = {
        nameCompany: form.elements.nameCompany.value,
        photo:form.elements.photo.value,
       
      }
      await axios.put(`http://localhost:5000/api/company/profile`, orderBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getProfileCompany()
      toast.success(" edit ProfileCompany success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getProfileEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employee/profile", {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      setProfile(response.data)
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const editProfileEmployee = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const orderBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo:form.elements.photo.value,
        phone:form.elements.phone.value,
        email: form.elements.email.value,
       
      }
      await axios.put(`http://localhost:5000/api/employee/profile`, orderBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getProfileEmployee()
      toast.success(" edit ProfileEmployee success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getProfileAdmin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      setProfile(response.data)
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addOrder = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const orderBody = {
        nameP: form.elements.nameP.value,
        descriptionP: form.elements.descriptionP.value,
        posterP: form.elements.posterP.value,
        areaP: form.elements.areaP.value,
        LocationP: form.elements.LocationP.value,
      }
      await axios.post(`http://localhost:5000/api/order`, orderBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getOrder()
      toast.success("add Order success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editOrder = async (e, orderid) => {
    e.preventDefault()
    try {
      const form = e.target

      const orderBody = {
        nameP: form.elements.nameP.value,
        descriptionP: form.elements.descriptionP.value,
        posterP: form.elements.posterP.value,
        areaP: form.elements.areaP.value,
        LocationP: form.elements.LocationP.value,
      }
      await axios.put(`http://localhost:5000/api/order/${orderid}`, orderBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getOrder()
      toast.success("edit order success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteOrder = async orderid => {
    try {
      await axios.delete(`http://localhost:5000/api/order/${orderid}`, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      toast.success("order deleted")
      getOrder()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth", {
      headers: {
        Authorization: localStorage.tokenDashboardAdmin,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
    getOrder()
    getCompany()
    getEmployee()
    getField()
    getStudy()
    getOrderCompany()
    getOrderEmployee()
    if (localStorage.tokenDashboardAdmin) {
      getProfileCompany()
      getProfileEmployee()
      getProfileAdmin()
    }
  }, [])
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardAdmin = response.data
      toast.success("login success")
      getProfileAdmin()
      navigate("/orders")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const loginCompany = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/company/login", userBody)

      const token = response.data
      localStorage.tokenDashboardAdmin = token
      getProfileCompany()
      console.log("login success")
      navigate("/orders")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const loginEmployee = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/employee/login", userBody)

      const token = response.data
      localStorage.tokenDashboardAdmin = token
      getProfileEmployee()
      console.log("login success")
      navigate("/orders")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenDashboardAdmin")
    setProfile(null)
    navigate("/login")
  }
  const logoutCompany = () => {
    localStorage.removeItem("tokenDashboardAdmin")
    setProfile(null)

    navigate("/loginCompany")
  }
  const logoutEmployee = () => {
    localStorage.removeItem("tokenDashboardAdmin")
    setProfile(null)

    navigate("/loginEmployee")
  }
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        phone: form.elements.phone.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addUser = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        phone: form.elements.phone.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/signup`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getUsers()
      toast.success("add user success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userid => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userid}`, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getCompany = async () => {
    const response = await axios.get("http://localhost:5000/api/company")
    setCompanies(response.data)
  }
  const addCompany = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const fields = []
      if (form.elements.fields.forEach) {
        form.elements.fields.forEach(field => {
          if (field.checked) {
            fields.push(field.value)
          }
        })
      } else {
        if (form.elements.fields.checked) {
          fields.push(form.elements.fields.value)
        }
      }

      const companyBody = {
        nameCompany: form.elements.nameCompany.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value,
        fields: fields,

      }
      await axios.post(`http://localhost:5000/api/company`, companyBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getCompany()
      toast.success("add Company success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editCompany = async (e, companyid) => {
    e.preventDefault()
    try {
      const form = e.target

      const  fields = []
      if (form.elements. fields.forEach) {
        form.elements. fields.forEach( field => {
          if ( field.checked) {
            fields.push( field.value)
          }
        })
      } else {
        if (form.elements. fields.checked) {
          fields.push(form.elements. fields.value)
        }
      }

      const companyBody = {
        nameCompany: form.elements.nameCompany.value,
        photo: form.elements.photo.value,
        fields: fields,
      }
      await axios.put(`http://localhost:5000/api/company/${companyid}`, companyBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getCompany()
      toast.success("edit Company success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteCompany = async companyid => {
    try {
      await axios.delete(`http://localhost:5000/api/Company/${companyid}`, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      toast.success("Company deleted")
      getCompany()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getEmployee = async () => {
    const response = await axios.get("http://localhost:5000/api/employee")
    setEmployees(response.data)
  }
  const addEmployee = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const fields = []
      if (form.elements.fields.forEach) {
        form.elements.fields.forEach(field => {
          if (field.checked) {
            fields.push(field.value)
          }
        })
      } else {
        if (form.elements.fields.checked) {
          fields.push(form.elements.fields.value)
        }
      }

      const employeeBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        fields: fields,
      }
      await axios.post(`http://localhost:5000/api/employee`, employeeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getProfileCompany()
      getEmployee()
      toast.success("add employee success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editEmployee = async (e, employeeid) => {
    e.preventDefault()
    try {
      const form = e.target
      const fields = []
      if (form.elements.fields.forEach) {
        form.elements.fields.forEach(field => {
          if (field.checked) {
            fields.push(field.value)
          }
        })
      } else {
        if (form.elements.fields.checked) {
          fields.push(form.elements.fields.value)
        }
      }
      const employeeBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        fields: fields,
      }
      await axios.put(`http://localhost:5000/api/employee/${employeeid}`, employeeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getEmployee()
      toast.success("edit employee success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteEmployee = async employeeid => {
    try {
      await axios.delete(`http://localhost:5000/api/employee/${employeeid}`, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      toast.success("employee deleted")
      getEmployee()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getField = async () => {
    const response = await axios.get("http://localhost:5000/api/Field")
    setFields(response.data)
  }
  const addField = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const fieldBody = {
        typeField: form.elements.typeField.value,
        photo: form.elements.photo.value,
      }
      await axios.post(`http://localhost:5000/api/Field`, fieldBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getField()
      toast.success("add Field success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editField = async (e, fieldid) => {
    e.preventDefault()
    try {
      const form = e.target

      const fieldBody = {
        typeField: form.elements.typeField.value,
        photo: form.elements.photo.value,
      }
      await axios.put(`http://localhost:5000/api/Field/${fieldid}`, fieldBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getField()
      toast.success("edit Field success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteField = async fieldid => {
    try {
      await axios.delete(`http://localhost:5000/api/Field/${fieldid}`, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      toast.success("Field deleted")
      getField()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getStudy = async () => {
    const response = await axios.get("http://localhost:5000/api/Study")
    setStudies(response.data)
  }
  const addStudy = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const study = form.elements.study.files[0]
      const studyRef = firebase.storage().ref("studise").child(`${study.lastModified}-${study.name}`)
      await studyRef.put(study)
      const studyUrl = await studyRef.getDownloadURL()
      console.log(studyUrl)
      const studyBody = {
        orderid: form.elements.orders.value,
        study: studyUrl,
      }
      await axios.post(`http://localhost:5000/api/Study`, studyBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getStudy()
      getProfileEmployee()
      navigate("/studies")
      toast.success("add study success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addorderstatus = async orderid => {
    try {
      await axios.post(
        `http://localhost:5000/api/order/${orderid}`,
        {},
        {
          headers: {
            Authorization: localStorage.tokenDashboardAdmin,
          },
        }
      )
      getOrder()
      // toast.success("add order success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const setOrderCompany = async ( orderid,studyid) => {
    try {
      await axios.put(
        `http://localhost:5000/api/order/${orderid}/completestudy/${studyid}`,
        {},
        {
          headers: {
            Authorization: localStorage.tokenDashboardAdmin,
          },
        }
      )
      getProfileCompany()
      getProfileEmployee()
      toast.success("study completed")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const assemp = async (e, orderid) => {
    console.log(orderid)
    e.preventDefault()
    try {
      const form = e.target

      const orderBody = {
        employeeid: form.elements.employeeid.value,
      }
      await axios.put(`http://localhost:5000/api/order/${orderid}/assignemp`, orderBody, {
        headers: {
          Authorization: localStorage.tokenDashboardAdmin,
        },
      })
      getOrder()
      getEmployee()
      toast.success("add assemp success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  console.log(profile)
  const store = {
    orders,
    companise,
    employees,
    fields,
    studise,
    users,
    profile,
    login,
    logout,
    addAdmin,
    deleteUser,
    addOrder,
    editOrder,
    deleteOrder,
    addCompany,
    editCompany,
    deleteCompany,
    addEmployee,
    editEmployee,
    deleteEmployee,
    addField,
    editField,
    deleteField,
    loginCompany,
    loginEmployee,
    logoutCompany,
    logoutEmployee,
    addStudy,
    addorderstatus,
    assemp,
    setOrderCompany,
    addUser,
    editProfileEmployee,
    editProfileCompany, 
  }
  console.log(profile)
  return (
    <SQBContext.Provider value={store} >
      <ToastContainer  />
      <CssBaseline />
      <Box sx={{ display: "flex" }} style={{backgroundColor:"#D0D0D0",height: "100vh"}}>
        {profile?.role === "Company" ? (
          <SidebarCompany />
        ) : profile?.role === "Employee" ? (
          <SidebarEmployee />
        ) : profile?.role === "Admin" ? (
          <Sidebar  />
        ) : null}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            {/* <Route
              path="/"
              element={localStorage.tokenDashboardAdmin ? <Navigate to="/orders" /> : <Navigate to="/login" />}
            /> */}
            <Route path="/users" element={localStorage.tokenDashboardAdmin ? <Users /> : <Navigate to="/login" />} />
            <Route
              path="/companise"
              element={localStorage.tokenDashboardAdmin ? <Companise /> : <Navigate to="/login" />}
            />
            <Route
              path="/orders"
              element={
                profile?.role === "Company" ? (
                  <OrderCompany />
                ) : profile?.role === "Employee" ? (
                  <OrderEmployee />
                ) : profile?.role === "Admin" ? (
                  <Orders />
                ) : null
              }
            />

            <Route
              path="/employees"
              element={
                profile?.role === "Company" ? <EmployeeCompany /> : profile?.role === "Admin" ? <Employee /> : null
              }
            />

            <Route path="/fields" element={localStorage.tokenDashboardAdmin ? <Fields /> : <Navigate to="/login" />} />
            <Route
              path="/profile"
              element={
                profile?.role === "Company" ? (
                  <ProfileCompany />
                ) : profile?.role === "Employee" ? (
                  <ProfileEmployee />
                ) : null
              }
            />
            <Route
              path="/studies"
              element={profile?.role === "Employee" ? < StudiesEmployee/> : profile?.role === "Admin" ? <Studies /> : null}
            />

            <Route
              path="/profileEmployee"
              element={localStorage.tokenDashboardAdmin ? <ProfileEmployee /> : <Navigate to="/login" />}
            />
            <Route
              path="/profileCompany"
              element={localStorage.tokenDashboardAdmin ? <ProfileCompany /> : <Navigate to="/login" />}
            />

            <Route path="/login" element={profile ? <Navigate to="/orders" /> : <Login />} />
            <Route path="/loginEmployee" element={profile ? <Navigate to="/orders" /> : <LoginEmployee />} />
            <Route path="/loginCompany" element={profile ? <Navigate to="/orders" /> : <LoginCompany />} />
          </Routes>
        </Box>
      </Box>
    </SQBContext.Provider>
  )
}
export default App
