import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import AppBar from "@mui/material/AppBar"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
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
import { FiUser } from "react-icons/fi";
import MenuBookIcon from "@mui/icons-material/MenuBook"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AllInboxIcon from '@mui/icons-material/AllInbox';

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logoutEmployee,profile } = useContext(SQBContext)
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
            <ListItemText > <img src={profile.photo} style={{ marginTop:"90px", height: "150px", width: "100%",clipPath: "circle()" }} /></ListItemText> 
          </ListItem>
        </List>
        <List style={{ marginRight:"10px",marginLeft:"15px",marginBottom:"10px",marginTop:"1px"}}>
          <ListItem >
            <ListItemIcon>
              <AccountCircleIcon style={{ marginRight:"20px",height: "40px", width: "100%"}} />
            </ListItemIcon>
            <ListItemText>{profile.firstName} {profile.lastName}  </ListItemText> 
          </ListItem>
        </List>
        <Divider  />
        
        <Link to="/orders" style={{textDecoration: "none"}}>
          <ListItem style={{marginBottom :"5px",marginTop:"40px",}} >
            <ListItemIcon>
              <AllInboxIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
            </ListItemIcon>
            <ListItemText primary="Orders" sx={{ color: "white", textDecoration: "none"}}  />
          </ListItem>
        </Link>
        <List>
          <Link to="/studies" style={{textDecoration: "none"}}>
            <ListItem style={{marginBottom :"20px", marginTop:"1px"}}>
              <ListItemIcon>
                <MenuBookIcon style={{height: "30px", width: "80%",marginRight:"10px"}}/>
              </ListItemIcon>
              <ListItemText primary="Studies" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/profileEmployee" style={{textDecoration: "none"}}>
            <ListItem style={{marginBottom :"40px", marginTop:"1px"}}>
              <ListItemIcon>
                <RecentActorsIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
              </ListItemIcon>
              <ListItemText primary="profileEmployee" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        
        <Divider  />
        {localStorage.tokenDashboardAdmin ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginEmployee" style={{textDecoration: "none"}}>
              <ListItem onClick={logoutEmployee}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logoutEmployee" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginEmployee" style={{textDecoration: "none"}}>
              <ListItem>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="loginEmployee" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  )
}
