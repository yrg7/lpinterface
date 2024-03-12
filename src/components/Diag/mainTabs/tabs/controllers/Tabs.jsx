import {useState} from 'react'
import styled from 'styled-components'
import Tab from './Tab'


const Box = styled.div`
  
    color: #8fbcd1;
    padding: 2px;
    text-align: center;

    display: grid;
    /* gap: 2px; */
    column-gap: 1px;
    background-color: #082947;

    /* grid-template-areas:
    "A1 A2 A3 A4"
    "B1 B1 B1 B1"; */

    /* grid-template-rows: 50px 100px 100px 100px 50px; */
    grid-template-columns: repeat(6, 1fr);
    margin: 10px;
    
`

const Tabs = (props) => {

  const [selectedId, setSelectedId] = useState(1);

  const tclick = (id) => {
    // 👇️ passing function to setData method
    props.setCntrollersArrayTmp(tabsArray => {
      const newState = props.controllers.map(obj => {
        // 👇️ if id equals 2, update country property
        if (obj.id === id) {
          // setCurrTabText(obj.descr)
          setSelectedId(id)
          return { ...obj, bg: 'black' };
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


  return (
    <Box>
      {
        props.controllers.map((obj) => <Tab key={obj.id} obj={obj} tclick={tclick}/>
      )}
    </Box>
  )
} 

export default Tabs
