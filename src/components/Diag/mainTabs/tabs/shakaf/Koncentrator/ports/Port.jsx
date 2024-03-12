import React from 'react'
import styled from 'styled-components';
import areaStyles from '../../../../../../../styles/commonAreaStyles';
import LevelStyle from './LevelStyle'
const Box = styled.div`
    ${areaStyles}
    ${LevelStyle}

`

export default function Port(props) {
  // console.log('Port '+props.iPort.name)
  return (
    <Box>
      <p>{props.iPort.name}</p>  
      <p>{props.iPort.driver}</p>
    </Box>
  )
}

