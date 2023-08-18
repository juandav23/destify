import React from "react"
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const Header = () => {
  return (
    <header>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Room Dashboard
          </Typography>
          <Button>
            <Avatar sx={{ bgcolor: "secondary.main", width: 24, height: 24, p: 1 }}>
              AN
            </Avatar>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
