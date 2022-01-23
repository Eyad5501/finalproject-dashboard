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
import BusinessIcon from "@mui/icons-material/Business"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AiOutlineUser } from "react-icons/ai";

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout ,profile} = useContext(SQBContext)
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
            <ListItemText > <img src={profile.avatar} style={{ marginTop:"50px", height: "150px", width: "100%",clipPath: "circle()" }} /></ListItemText> 
          </ListItem>
        </List>
        <List style={{ marginRight:"10px",marginLeft:"15px",marginBottom:"10px",marginTop:"1px"}}>
          <ListItem >
            <ListItemIcon>
              <AccountCircleIcon style={{ marginRight:"20px",height: "40px", width: "100%"}} />
            </ListItemIcon>
            <ListItemText>{profile.firstName} {profile.lastName}  </ListItemText> 
        
          </ListItem>
          <ListItemText style={{marginLeft:"10px"}}>{profile.email} </ListItemText> 
        </List>
        <Divider  />
        <Link to="/orders" style={{textDecoration: "none"}}>
          <ListItem button>
            <ListItemIcon>
              <AddReactionIcon style={{height: "30px", width: "80%",marginRight:"10px"}}/>
            </ListItemIcon>
            <ListItemText primary="orders" sx={{ color: "white", textDecoration: "none" }} />
          </ListItem>
        </Link>
        <Link to="/companise"style={{textDecoration: "none"}}>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
            </ListItemIcon>
            <ListItemText primary="companise" sx={{ color: "white", textDecoration: "none" }} />
          </ListItem>
        </Link>

        <List>
          <Link to="/employees" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
              </ListItemIcon>
              <ListItemText primary="employees" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/fields" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon  style={{height: "30px", width: "80%",marginRight:"10px"}}/>
              </ListItemIcon>
              <ListItemText primary="fields" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/studies" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <MenuBookIcon style={{height: "30px", width: "80%",marginRight:"10px"}} />
              </ListItemIcon>
              <ListItemText primary="studies" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/users" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <AiOutlineUser style={{height: "30px", width: "80%",marginRight:"10px"}} />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        {localStorage.tokenDashboardAdmin ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/login"  style={{textDecoration: "none"}}>
              <ListItem button onClick={logout}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <Link to="/login"  style={{textDecoration: "none"}}>
              <ListItem>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  
  )
}
