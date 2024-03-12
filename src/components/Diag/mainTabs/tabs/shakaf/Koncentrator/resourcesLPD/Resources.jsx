import React from 'react';
import styled from 'styled-components';
import CPU from './CPU/CPU';
import HDD1 from './HDD1/HDD1';
import HDD1All from './HDD1/HDD1All';
import HDD2 from './HDD2/HDD2';
import HDD2All from './HDD2/HDD2All';
import RAM from './RAM/RAM';
import RAM_All from './RAM/RAM_All';
import Temperatura from './temperatura/Temperatura';
import { COLORS } from '../../../../../../../styles/colors';
const Box = styled.div`
    grid-area: A101;
   
    /* height: 200px; */
    align-self : stretch;
    /* min-width: 100%; */
    
    border: 1px solid ${COLORS.border};
    display: grid;
    grid-template-areas:
    "A1000 A1001"
    "B1000 B1001"
    "C1000 C1001"
    "D1000 D1001";
    padding-top: 20px;
    margin: 10px;

`


const Resources = () => {
    return (
        <>
            <Box>
                <Temperatura />
                <CPU />
                <RAM />
                <RAM_All />
                <HDD1 />
                <HDD1All />
                <HDD2 />
                <HDD2All />

            </Box>
        </>
    );
}

export default Resources;

