import React, { useContext } from "react";
import {
  Box,
  Icon,
  Button,
  useTheme,
  InputBase,
  IconButton,
} from "@mui/material";
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
  const colorModes = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent={"space-between"}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        border-radius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={"Search"} />
        <SearchOutlinedIcon />
      </Box>
    </Box>
  );
};

export default Topbar;
