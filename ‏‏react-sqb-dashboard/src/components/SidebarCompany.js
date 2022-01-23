import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useContext } from "react"
import SQBContext from "../utils/SQBContext"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AllInboxIcon from '@mui/icons-material/AllInbox';

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logoutCompany ,profile} = useContext(SQBContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "#474543" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
       <List >
          <ListItem >
            <ListItemText > <img src={profile.photo} style={{ marginTop:"50px", height: "150px", width: "100%",clipPath: "circle()" }} /></ListItemText> 
          </ListItem>
        </List>
        <List style={{ marginRight:"10px",marginLeft:"15px",marginBottom:"10px",marginTop:"1px"}}>
          <ListItem >
            <ListItemIcon>
              <AccountCircleIcon style={{ marginRight:"20px",height: "40px", width: "100%"}} />
            </ListItemIcon>
            <ListItemText>{profile. nameCompany}  </ListItemText> 
          </ListItem>
        </List>
        <Divider  />
        <List>
        <Link to="/orders"  style={{textDecoration: "none"}}>
          <ListItem style={{marginBottom :"5px",marginTop:"40px",}}>
            <ListItemIcon>
            <AllInboxIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
            </ListItemIcon>
            <ListItemText primary="OrderCompany" sx={{ color: "white", textDecoration: "none" }} />
          </ListItem>
        </Link>
        </List>
          <Link to="/employees" style={{textDecoration: "none"}}>
            <ListItem style={{marginBottom :"10px", marginTop:"1px"}}>
              <ListItemIcon>
              <GroupIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
              </ListItemIcon>
              <ListItemText primary="employeeCompany" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        <List>
          <Link to="/profileCompany" style={{textDecoration: "none"}}>
            <ListItem style={{marginBottom :"40px", marginTop:"1px"}}>
              <ListItemIcon>
                <RecentActorsIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
              </ListItemIcon>
              <ListItemText primary="profileCompany" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {localStorage.tokenDashboardAdmin ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginCompany" style={{textDecoration: "none"}}>
              <ListItem button onClick={logoutCompany}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logoutCompany" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginCompany" style={{textDecoration: "none"}}>
              <ListItem>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="loginCompany" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  )
}
