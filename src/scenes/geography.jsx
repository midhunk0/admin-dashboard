import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../data/components/Header";
import GeographyChart from "../data/components/GeographyChart";
import { tokens } from "../data/theme";

const Geography=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart"/>
            <Box height="75vh" border={`1px solid ${colors.gray[100]}`} borderRadius="4px">
                <GeographyChart/>
            </Box> 
        </Box>
    )
};

export default Geography;