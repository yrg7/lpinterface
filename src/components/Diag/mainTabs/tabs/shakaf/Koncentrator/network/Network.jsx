import { useState } from 'react';
import styled from 'styled-components';
import NetworkUnit from './NetworkUnit';
const Box = styled.div`
    grid-area: A103;
   
    /* height: 200px; */
    align-self : stretch;
    /* min-width: 100%; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* background-color: black; */
    border: 1px solid white;
    padding-top: 20px;
    margin: 10px;
`


const Network = () => {

    const [tmpNetworkArray, setTmpNetworkArray] = useState([
        { num: 1, name: 'СПД-ЛП', },
        { num: 2, name: 'РА', },
        { num: 3, name: 'МПЦ', },
 

    ]);

    return (
        <Box>
            {
                tmpNetworkArray.map(obj => <NetworkUnit key={obj.num} obj={obj} />
                )
            }

        </Box>
    );
}

export default Network;
