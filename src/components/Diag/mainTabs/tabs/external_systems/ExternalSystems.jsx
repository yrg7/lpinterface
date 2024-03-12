import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import ExtSystemControllersStore from '../../../../../store/mobx_store/SelfDiag/ExtSystemControllers';
import DeviceDiagnosticConfigStore from '../../../../../store/mobx_store/SelfDiag/DeviceDiagnosticConfig'
import Controller from '../controllers/Controller'

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

const ExtSystemControllers = observer(() => {
    return (
        
        <div>
            {/* {DeviceDiagnosticConfigStore.isLoading ? (
      <p>Loading XML data...</p>
    ) : (
      <h1>{DeviceDiagnosticConfigStore.Host}</h1>
    )} */}

            {ExtSystemControllersStore.isLoading ? (
                <p>Loading XML data...</p>

            ) : (
                <>
                    {/* <MXml data1={xmlData1} data2={xmlData2} setControllerData={setControllerData} /> */}
                    <Box>
                        {ExtSystemControllersStore.mainObj.tabsArray.map((d, index) => <Controller key={index} iTab={d} image={DeviceDiagnosticConfigStore.ExtSystemsGeneralGroupBox.indicatorsArray.find(item => item.title === d.title).image} />
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

export default ExtSystemControllers;
