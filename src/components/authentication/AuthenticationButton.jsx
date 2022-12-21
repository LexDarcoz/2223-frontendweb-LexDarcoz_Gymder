import { useAuth0 } from "@auth0/auth0-react";
import Settings from "@mui/icons-material/Settings";
import AddCommentIcon from "@mui/icons-material/AddComment";
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
import React, { Fragment, useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";
import Transl from "../../Translation/i18n/translate";

export default function AuthenticationButton(prop) {
  const { isAuthenticated, user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  if (isAuthenticated) {
    const { picture } = user;

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    function NavigateTo(navigation) {
      navigate(navigation);
    }
    return (
      <Fragment>
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
          <MenuItem onClick={() => NavigateTo("/myGym")}>
            <div className="nav-link d-flex" to="/myGym">
              <Avatar sx={{ width: 32, height: 32 }}>
                <img src={picture} alt="ProfilePicture" />
              </Avatar>
              {Transl("MyGym")}
            </div>
          </MenuItem>
          <MenuItem onClick={() => NavigateTo("/addGym")}>
            <ListItemIcon>
              <AddCommentIcon fontSize="small" />
            </ListItemIcon>
            <div className="nav-link d-flex" to="/addGym">
              {Transl("AddGymProfile")}
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => NavigateTo("/myProfile/settings")}>
            <div className="nav-link" to="/myProfile/settings">
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              {Transl("Settings")}
            </div>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <LogoutButton />
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }

  return <LoginButton prop={"btn btn-primary"} />;
}
