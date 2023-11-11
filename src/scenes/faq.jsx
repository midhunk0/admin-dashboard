import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../data/components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../data/theme";

const FAQ=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questiond Page"/>

            <Accordion defaultExpanded sx={{background:colors.primary[700]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{background:colors.primary[700]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </AccordionDetails>
            </Accordion>            
            <Accordion defaultExpanded sx={{background:colors.primary[700]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Your Favorite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
};

export default FAQ;