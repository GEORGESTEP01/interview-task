import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import UserIcon from "@mui/icons-material/Person";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledComponents";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header({ onSearchInput }) {
  const [userMenuOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const { name } = JSON.parse(localStorage.getItem("MSAL")).account || ""

  const userMenuOptions = [
    {
      id: 0,
      title: "Logout",
    },
  ];

  const handleMenuItemClick = (id) => {
    if (id === 0) {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2%" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-controls="user-menu"
            aria-haspopup="true"
            onClick={() => setOpen(!userMenuOpen)}
            aria-label="Open to show more"
            title="Open to show more"
            sx={{ color: "#FFF" }}
          >
            <UserIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={userMenuOpen}
            keepMounted
            open={Boolean(userMenuOpen)}
            onClose={() => setOpen(false)}
          >
            {userMenuOptions.map((item) => (
              <MenuItem
                onClick={() => handleMenuItemClick(item.id)}
                key={item.id}
                value={item.title}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "700",
            }}
          >
            Hi, {name}!
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={onSearchInput}
              placeholder="Search by Name or Email…"
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
