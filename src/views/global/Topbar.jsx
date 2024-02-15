import React, { useContext } from "react";
import { Box, useTheme, InputBase, IconButton } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOulinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent={"space-between"} p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        border-radius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={"Search"} />
        <IconButton type="button">
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon onClick={colorMode.toggleColorMode} />
          ) : (
            <LightModeOulinedIcon onClick={colorMode.toggleColorMode} />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
