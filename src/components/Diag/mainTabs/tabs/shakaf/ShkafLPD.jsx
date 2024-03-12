import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tab from '../../../tab';
import KoncentratorLPD from './Koncentrator/KoncentratorLPD';
import MM from './MM/MM';
import UBP from './UBP/UBP'
import { COLORS } from '../../../../../styles/colors';

const Box = styled.div`
display: grid;
grid-template-areas:
    "A11 A12 A13"
    "B11 B11 B11";
    column-gap: 1px;
    /* background-color: grey; */
   
`

const ShkafLPD = () => {
    // const [currTabText, setCurrTabText] = useState('')

    const [selectedId, setSelectedId] = useState(1);

    // useEffect(() => {
    //   setCurrTabText(tabsArray[0].descr)


    // }, []);

    const tclick = (id) => {
        // 👇️ passing function to setData method
        setTabsArray(tabsArray => {
            const newState = tabsArray.map(obj => {
                // 👇️ if id equals 2, update country property
                if (obj.id === id) {
                    //   setCurrTabText(obj.descr)
                    setSelectedId(id)
                    return { ...obj, bg: COLORS.back };
                }
                else {
                    return {
                        ...obj, bg: 'darkslategray'
                    };
                }
                // 👇️ otherwise return the object as is
                return obj;
            });
            return newState;
        });
    };
    const [tabsArray, setTabsArray] = useState([
        { id: 1, text: 'Концентратор', bg: COLORS.back, ga: 'A11', descr: 'вкладка 1' },
        { id: 2, text: 'Состояние УБП', bg: 'darkslategray', ga: 'A12', descr: 'вкладка 2' },
        { id: 3, text: 'Состояние ММ', bg: 'darkslategray', ga: 'A13', descr: 'вкладка 3' },
    ]);
    return (
        <Box>
            {
                tabsArray.map((obj) => <Tab key={obj.id} id={obj.id} text={obj.text} bg={obj.bg} ga={obj.ga} tclick={tclick} />
                )}

            <TabSpace id={selectedId} />
        </Box>
    );
}

export default ShkafLPD;

const Box1 = styled.div`
 grid-area: B11;
   
    height: 200px;
    align-self : stretch;
    /* min-width: 100%; */
    background-color: black;
`

const TabSpace = (props) => {
    return (
        <Box1>

            {props.id === 1 ? <KoncentratorLPD /> : props.id === 2 ? <UBP /> : <MM />}


        </Box1>
    );
}