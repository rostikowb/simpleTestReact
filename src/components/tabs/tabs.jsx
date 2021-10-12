import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from '@mui/lab/TabList';

export default function Tabs({handleChangeTab}) {

  return (
    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
      <TabList onChange={(ev, val) => handleChangeTab(val)}>
        <Tab label="Первая" value="1"/>
        <Tab label="Вторая" value="2"/>
        <Tab label="Третья" value="3"/>
      </TabList>
    </Box>
  )
}