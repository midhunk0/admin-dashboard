// @ts-nocheck
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material"; 

const LineChart=({isDashboard=false})=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return(
        <ResponsiveLine
            data={data}
            theme={{
                axis:{
                    domain:{
                        line:{
                            stroke:colors.gray[100]
                        }
                    },
                    legend:{
                        text:{
                            fill:colors.gray[100]
                        }
                    },
                    ticks:{
                        text:{
                            fill:colors.gray[100]
                        },
                        line:{
                            stroke:colors.gray[100],
                            strokeWidth:1
                        }
                    }
                },
                legends:{
                    text:{
                        fill:colors.gray[100]
                    }
                },
                tooltip:{
                    container:{
                        color:colors.gray[500]
                    }
                }
            }}
            colors={isDashboard ? {datum:"color"} : {scheme:"nivo"}}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'transportation',
                legendOffset: 34,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickValues:5,
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ from: 'color', modifiers: [] }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            enableCrosshair={false}
            useMesh={true}
            legends={[
                {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 97,
                    translateY: -2,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 81,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
};

export default LineChart;