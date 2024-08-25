import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function SideNavigation() {
  const location = useLocation();
  const paths = [
    "/",
    "/home",
    "/bookTickets",
    "/viewTickets",
    "/cancelTickets",
    
  ];
  const navigate = useNavigate();
  const [sideNav, setSideNav] = useState(false);
  useEffect(() => {
    if (paths.includes(location.pathname) && location.pathname !== "/") {
      setSideNav(true);
    } else {
      setSideNav(false);
    }
  }, [paths, location.pathname]);
  const navigation = [
    { path: "/home", name: "Home" },
    { path: "/bookTickets", name: "Book Tickets" },
    { path: "/viewTickets", name: "View Tickets" },
    { path: "/cancelTickets", name: "Cancel Tickets" },
  ];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List style={{backgroundColor:'pink'}}>
        {navigation.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton component={Link} to={text.path}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      {sideNav && (
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "180px" },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </div>
  );
}
