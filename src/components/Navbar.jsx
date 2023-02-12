import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

import { ListItemIcon } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav id="navbar">
        <ul>
          <li className="nav-non-mobile">
            <Link to="/">No. West Collective</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="/zine">Zine</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="/events">Events</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
