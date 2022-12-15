import { useAuth0 } from "@auth0/auth0-react";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link, Navigate } from "react-router-dom";

export default function AuthenticationButton(prop) {
  const { isAuthenticated, user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  if (isAuthenticated) {
    const { picture } = user;

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={open ? handleClose : handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <img src={picture} alt="ProfilePicture" />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 1,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Link className="nav-link d-flex" to="/myProfile">
              <Avatar sx={{ width: 32, height: 32 }}>
                <img src={picture} alt="ProfilePicture" />
              </Avatar>
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="nav-link d-flex" to="/myGym">
              <Avatar sx={{ width: 32, height: 32 }}>
                <img src={picture} alt="ProfilePicture" />
              </Avatar>
              My Gym
            </Link>
          </MenuItem>
          <Divider />

          <MenuItem>
            <Link className="nav-link" to="/myProfile/Settings">
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <LogoutButton />
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }

  return <LoginButton prop={"btn btn-primary"} />;
}
