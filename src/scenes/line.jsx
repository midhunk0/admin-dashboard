import React from "react";
import { Box } from "@mui/material";
import Header from "../data/components/Header";
import LineChart from "../data/components/LineChart";

const Line=()=>{
    return(
        <Box m="20px">
            <Header title="LINE CHART" subtitle="Simple Line Chart"/>
            <Box height="75vh">
                <LineChart/>
            </Box>
        </Box>
    )
};

export default Line;