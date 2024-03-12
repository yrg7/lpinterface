import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
// import Tab from './tabs/tab';
import Tab from '../tab'
import ShkafLPD from './tabs/shakaf/ShkafLPD';
import Controllers from './tabs/controllers/Controllers';
import ExternalControllers from './tabs/external_controllers/ExternalControllers';
import ExternalSystems from './tabs/external_systems/ExternalSystems';
import { COLORS } from '../../../styles/colors';
// import TabSpace from './tabs/TabSpace';
const Box = styled.div`
  /* height: 20vh; */
  
    grid-area: D;
    color: ${COLORS.text};
    padding: 2px;
    text-align: center;

    display: grid;
    /* gap: 2px; */
    column-gap: 1px;
    background-color: ${COLORS.back};

    grid-template-areas:
    "A1 A2 A3 A4"
    "B1 B1 B1 B1";
    align-self : start;
    /* align-items: start; */

    /* grid-template-rows: 50px 100px 100px 100px 50px; */
    
`

const MainTabs = () => {

    const [tabsArray, setTabsArray] = useState([
        { id: 1, text: 'Шкаф ЛПД', bg: COLORS.back, ga: 'A1', descr: 'вкладка 1' },
        { id: 2, text: 'Контроллеры АПК-ДК', bg: 'darkslategray', ga: 'A2', descr: 'вкладка 2' },
        { id: 3, text: 'Внешние контроллеры', bg: 'darkslategray', ga: 'A3', descr: 'вкладка 3' },
        { id: 4, text: 'Внешние системы', bg: 'darkslategray', ga: 'A4', descr: 'радиоэлектронная война в планах пентагона и НАТО ' },
      ]);
      const [currTabText, setCurrTabText] = useState('')

      const [selectedId, setSelectedId] = useState(1);

      useEffect(() => {
        setCurrTabText(tabsArray[0].descr)
        
    
      }, []);

      const tclick = (id) => {
        // 👇️ passing function to setData method
        setTabsArray(tabsArray => {
          const newState = tabsArray.map(obj => {
            // 👇️ if id equals 2, update country property
            if (obj.id === id) {
              setCurrTabText(obj.descr)
              setSelectedId(id)
              return { ...obj, bg: COLORS.back };
            }
            else {
              return {
                ...obj, bg: 'darkslategray'
              };
            }
            // 👇️ otherwise return the object as is
            return obj;
          });
          return newState;
        });
      };

    return (
        <Box>
            {
             tabsArray.map((obj) => <Tab key={obj.id} id={obj.id} text={obj.text} bg={obj.bg} ga={obj.ga} tclick={tclick} />
        )}
        
         <TabSpace id={selectedId}/>
        </Box>
        
    );
}

export default MainTabs;


const Box1 = styled.div`
 grid-area: B1;
    background-color: ${COLORS.back};
    height: 900px;

    padding: 10px;
    border-left: 1px solid ${COLORS.border};
    border-bottom: 1px solid ${COLORS.border};
    border-right: 1px solid ${COLORS.border};
    /* min-width: 100%; */
`


const TabSpace = (props) => {
  return (
      <Box1>
          {props.id === 1 ? <ShkafLPD/> : props.id === 2 ? <Controllers/> : props.id === 3 ? <ExternalControllers/> : <ExternalSystems/> }
          
      </Box1>
  );
}