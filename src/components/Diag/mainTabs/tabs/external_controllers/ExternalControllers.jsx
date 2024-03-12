import { observer } from 'mobx-react-lite';
import React from 'react';
import ExtDeviceControllersStore from '../../../../../store/mobx_store/SelfDiag/ExtDeviceControllers'
import DeviceDiagnosticConfigStore from '../../../../../store/mobx_store/SelfDiag/DeviceDiagnosticConfig'
import styled from 'styled-components';
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

const ExternalControllers = observer(() => {
    return (

        <div>
            {/* {DeviceDiagnosticConfigStore.isLoading ? (
      <p>Loading XML data...</p>
    ) : (
      <h1>{DeviceDiagnosticConfigStore.Host}</h1>
    )} */}

            {ExtDeviceControllersStore.isLoading ? (
                <p>Loading XML data...</p>

            ) : (
                <>
                    {/* <MXml data1={xmlData1} data2={xmlData2} setControllerData={setControllerData} /> */}
                    <Box>
                        {ExtDeviceControllersStore.mainObj.tabsArray.map((d, index) => <Controller key={index} iTab={d} image={DeviceDiagnosticConfigStore.ExtControllersGeneralGroupBox.indicatorsArray.find(item => item.title === d.title).image} />
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
}
)
export default ExternalControllers;
