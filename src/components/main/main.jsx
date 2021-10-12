import React, {useState} from "react";
import Tabs from "../tabs/tabs";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import {data} from "../../testData.json"
import filterType from "../../libs/filterType";
import OneItem from "../oneItem/oneItem";
import s from "./main.module.css"

export default function Main() {
  const [currTab, setCurrTab] = useState('1')
  const [typesFiltered] = useState(filterType(data))
  const allTabsIndex = ['1', '2', '3']

  return (
    <div className={s.wrapper}>
      <TabContext value={currTab}>
        <Tabs handleChangeTab={setCurrTab}/>
        {allTabsIndex.map(tabIndex =>
          currTab === tabIndex ?
            <TabPanel className={s.onePanelBox} key={`tabN${tabIndex}`} value={tabIndex}>
              {typesFiltered[tabIndex].map(itemArr => {
                return <OneItem key={`itemTitle${itemArr.title}`} data={itemArr}/>
              })}
            </TabPanel>
            : null
        )}
      </TabContext>
    </div>
  )
}




