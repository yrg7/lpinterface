import React from 'react';
import styled from 'styled-components';
const Box = styled.div`
 grid-area: C100;
   
    /* height: 200px; */
    align-self : stretch;
    /* min-width: 100%; */
    /* background-color: black; */
    border: 1px solid white;
    padding-top: 20px;
    margin: 10px;
`

const Tcp = () => {
    return (
        <Box>
            <p>состояние tcp</p>
            <p>подключенных клиентов нет</p>
        </Box>
    );
}

export default Tcp;
