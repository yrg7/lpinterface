import {useState} from 'react'
import styled from 'styled-components'
import Controller from './Controller';

const Box = styled.div`
    display: grid;

    align-self : stretch;
    border: 1px solid white;
    grid-template-columns: repeat(6, 1fr);
    padding-top: 20px;
    margin: 10px;
    
`

const CommonInfo = (props) => {

  return (
    <Box>
      {
        props.controllers.map( obj => <Controller obj={obj}/>   

        )
      }
    </Box>
  )
}

export default CommonInfo
