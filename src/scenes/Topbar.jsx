import React from "react";
import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../data/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersongOutLinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const colorMode=useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" padding={2.5} >
            {/*search bar*/}
            <Box display="flex" style={{backgroundColor:colors.primary[400]}}>
                <InputBase sx={{ml:2, flex:1}} placeholder="Search"/>
                <IconButton disableRipple type="button" sx={{p:1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>

            {/*icons*/}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode==="dark" ? (
                        <DarkModeOutLinedIcon/>
                    ):(
                        <LightModeOutLinedIcon/>
                    )}
                </IconButton> 
                <IconButton>
                    <NotificationsOutLinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutLinedIcon/>
                </IconButton>
                <IconButton>
                    <PersongOutLinedIcon/>
                </IconButton>               
            </Box>
        </Box>
    )
}
export default Topbar;