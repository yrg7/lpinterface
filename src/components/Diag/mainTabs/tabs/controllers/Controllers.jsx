import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import CommonInfo from './CommonInfo';
import ControllerSpace from './ControllerSpace';
import Tabs from './Tabs';


import Controller from './Controller';

import { observer } from 'mobx-react-lite';
import ApkDkControllersStore from '../../../../../store/mobx_store/SelfDiag/ApkDkControllers'
import DeviceDiagnosticConfigStore from '../../../../../store/mobx_store/SelfDiag/DeviceDiagnosticConfig'

const Box = styled.div`
    //grid-area: B100;
    display: grid;

    /* height: 200px; */
    align-self : stretch;
    /* min-width: 100%; */
    /* background-color: black; */
    border: 1px solid white;
    grid-template-columns: repeat(6, 1fr);
    padding-top: 20px;
    margin: 10px;
`


const Controllers = observer(() => {
 



  useEffect(() => {


  }, []);
  
  
  return (

    <div>
      {DeviceDiagnosticConfigStore.isLoading ? (
        <p>Loading XML data...</p>
      ) : (
        <h1>{DeviceDiagnosticConfigStore.Host}</h1>
      )}

      {ApkDkControllersStore.isLoading ? (
        <p>Loading XML data...</p>

      ) : (
        <>
          {/* <MXml data1={xmlData1} data2={xmlData2} setControllerData={setControllerData} /> */}
          <Box>
          {ApkDkControllersStore.mainObj.tabsArray.map((d, index) => <Controller key={index} iTab={d} image={DeviceDiagnosticConfigStore.ControllersGeneralGroupBox.indicatorsArray.find(item => item.title === d.title ).image}/>
            )
            }
          </Box>

          {/* <div>
          {oneControllerData &&
            <ControllerData cData={oneControllerData} />
          }
        </div> */}
        </>
      )}



    </div>


  );
})

export default Controllers;


