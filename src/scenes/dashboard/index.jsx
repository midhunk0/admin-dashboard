import React from "react";
import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return (
        <Box m="20px">
            {/*header*/}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
                <Box>
                    <Button
                        sx={{
                            backgroundColor:colors.blueAccent[700],
                            color:colors.gray[100],
                            fontSize:"14px",
                            fontWeight:"bold",
                            padding:"10px 20px"
                        }}                
                    >
                        <DownloadOutlinedIcon sx={{mr:"10px"}}/>
                        Download Reports
                    </Button>
                </Box>
            </Box>
            {/*grid and charts*/}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/*row 1*/}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,352"
                        subtitle="Emails sent"
                        progress="0.75"
                        increase="+16%"
                        icon={
                            <EmailIcon 
                                sx={{
                                    color:colors.greenAccent[600],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="43,975"
                        subtitle="Sales obtained"
                        progress="0.25"
                        increase="+35%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color:colors.greenAccent[600],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="98,352"
                        subtitle="New Cients"
                        progress="0.55"
                        increase="+11%"
                        icon={
                            <PersonAddIcon 
                                sx={{
                                    color:colors.greenAccent[600],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,352,236"
                        subtitle="Traffic Inbound"
                        progress="0.20"
                        increase="+43%"
                        icon={
                            <TrafficIcon 
                                sx={{
                                    color:colors.greenAccent[600],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                </Box>
                {/*row 2*/}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 39px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.gray[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,346,98
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize:"26px",
                                        color:colors.greenAccent[500]
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px"> 
                        <LineChart isDashboard={true}/>
                    </Box>
                </Box>
                {/*transaction*/}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.gray[100]}
                        p="15px"
                    >
                        <Typography 
                            color={colors.gray[100]}                                
                            variant="h5"
                            fontWeight="600"
                        >
                            Recenet Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction,i)=>(
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography 
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography 
                                    color={colors.gray[100]}
                                >
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box
                                color={colors.gray[100]}    
                            >
                                {transaction.date}
                            </Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
                {/*row 3*/}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                    >
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125"/>
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{
                                mt:"15px"
                            }}                        
                        >
                            $45,234 revenue generated
                        </Typography>
                        <Typography>
                            Include extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"

                    >
                        Sales Quantity
                    </Typography>
                    <Box
                        height="250px"
                        mt="-20px"
                    >
                        <BarChart isDashboard={true}/>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{
                            mb:"15px"
                        }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box
                        height="200px"
                    >
                        <GeographyChart isDashboard={true}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default Dashboard;