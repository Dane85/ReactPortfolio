import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import "../App.css";

function Nav({ open, setOpen }) {
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto", // Align to the right
          mt: 1,
          mr: 2, // Add margin to the right
        }}
      >
        <ModalClose id="close-icon" sx={{ position: "initial" }} />
      </Box>

      <List
        size="lg"
        component="nav"
        sx={{
          flex: "none",
          fontSize: "xl",
          "& > div": { justifyContent: "center" },
        }}
      >
        <ListItemButton component={Link} to="/" onClick={() => setOpen(false)}>
          Home
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/services"
          onClick={() => setOpen(false)}
        >
          Services
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/about"
          onClick={() => setOpen(false)}
        >
          About
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/contacts"
          onClick={() => setOpen(false)}
        >
          Contacts
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/projects"
          onClick={() => setOpen(false)}
        >
          My Projects
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="https://epicexpressions.hbportal.co/app/"
          onClick={() => setOpen(false)}
        >
          Client Portal
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Nav;
