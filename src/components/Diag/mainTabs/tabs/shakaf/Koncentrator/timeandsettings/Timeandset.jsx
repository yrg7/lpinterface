import React from 'react';
import styled from 'styled-components';
import On from './On/On';
import PoData from './PO/PoData';
import PoVersion from './PO/PoVersion';
import PrjData from './Prj/PrjData';
import PrjVersion from './Prj/PrjVersion';
import Work from './Work/Work';


const Box = styled.div`
    grid-area: A102;
   
    /* height: 200px; */
    align-self : stretch;
    /* min-width: 100%; */
    /* background-color: black; */
    border: 1px solid white;
    display: grid;
    grid-template-areas:
    "A1010 A1011"
    "B1010 B1011"
    "C1010 C1011";
    padding-top: 20px;
    margin: 10px;

`


const Timeandset = () => {
    return (
        <Box>
            <On/>
            <Work/>
            <PoVersion/> 
            <PoData/>
            <PrjVersion/>
            <PrjData/>
        </Box>
    );
}

export default Timeandset;
