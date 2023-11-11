import React from "react";
import { Box } from "@mui/material";
import Header from "../data/components/Header";
import BarChart from "../data/components/BarChart";
 
const Bar=()=>{
    return(
        <Box m="20px">
            <Header title="BARCHART" subtitle="Simple Bar Chart"/>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    )
}

export default Bar;