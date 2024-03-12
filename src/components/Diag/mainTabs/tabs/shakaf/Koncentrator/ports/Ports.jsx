import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Port from './Port';
import { observer } from 'mobx-react-lite';
import PortsOwnerListStore from '../../../../../../../store/mobx_store/SelfDiag/PortsOwnerList';
const Box = styled.div`
    grid-area: B100;
    display: grid;

    /* height: 200px; */
    align-self : stretch;
    /* min-width: 100%; */
    /* background-color: black; */
    border: 1px solid white;
    grid-template-columns: repeat(5, 1fr);
    padding-top: 20px;
    margin: 10px;

`

const Ports = observer(() => {
  // const portsStore = new PortsOwnerListStore()
  return (
    <>
      {PortsOwnerListStore.isLoading ? (<p>Loading Xml</p>) : (

        <Box>
          {PortsOwnerListStore.Ports.map((d, index) => <Port key={index} iPort={d} />)}
        </Box>
      )}
    </>
  );
})

export default Ports ;


