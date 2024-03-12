import React from 'react';
import styled from 'styled-components';
import DevAndSystem from './dev_and_system/devAndSystem';
import MainTabs from './mainTabs/mainTabs';
import Shkaf from './shkaf/Shkaf';
import Menue from './menue/Menue';

const Box = styled.div`
    display: grid;
    gap: 2px;
    /* background-color: grey; */
    /* height: 100vh; */
    /* grid-template-rows: 100px 100px 100px; */
    /* grid-template-columns: 200px auto 100px; */
    /* grid-template-columns: repeat(3,1fr); */
    /* grid-template-rows: 200px auto 100px;*/
    grid-template-areas:
    "A A"
    "B D"
    "C D";
    grid-template-columns: 200px auto ;
    height: 800px;
    /* grid-template-rows: 300px 300px; */
    
`
const Main = () => {
    return (
        <Box>
            <Menue/>
            <Shkaf/>
            <DevAndSystem/>
            <MainTabs/>
        </Box>
    );
}

export default Main;
