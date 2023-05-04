import { useState } from "react";
import { proSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutLinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutLinedIcon from "@mui/icons-material/MapOutlined";


const Sidebar=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollpsed, setIsCollapsed]=useState(false);
    const [selected, setSelected]=useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner":{
                    background:`${colors.primary[400]}!important`
                },
                "& .pro-icon-wrapper":{
                    backgroundColor:"transparent !important"
                },
                "& .pro-inner-item":{
                    padding:"5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover":{
                    color:"#868dfb !important"
                },
                "& .pro-menu-item.active":{
                    color:"#6870fa !important"
                }
            }}
        >

        </Box>
    );
};

export default Sidebar;