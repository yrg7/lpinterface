import React from 'react';
import styled from 'styled-components';
import Network from './network/Network';
import Ports from './ports/Ports';
import Resources from './resourcesLPD/Resources';
import Tcp from './tcp/Tcp';
import Timeandset from './timeandsettings/Timeandset';
import { COLORS } from '../../../../../../styles/colors';
const Box = styled.div`
display: grid;
/* gap: 2px; */
column-gap: 1px;
background-color: ${COLORS.back};
padding-top: 10px;
border-left: 1px solid ${COLORS.border};
border-bottom: 1px solid ${COLORS.border};
border-right: 1px solid ${COLORS.border};
grid-template-areas:
"A101 A102 A103"
"B100 B100 C100";
`

const KoncentratorLPD = () => {
    return (
        <Box>
            <Resources/>
            <Timeandset/>
            <Network/>
            <Ports/>
            <Tcp/>
        </Box>
    );
}

export default KoncentratorLPD;
