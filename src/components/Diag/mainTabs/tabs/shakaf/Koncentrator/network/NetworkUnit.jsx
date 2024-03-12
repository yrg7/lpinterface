import React from 'react'
import styled from 'styled-components';
import areaStyles from '../../../../../../../styles/commonAreaStyles';
const Box = styled.div`
    ${areaStyles};
   
`

const NetworkUnit = (props) => {
  return (
    <Box>
      <p>{props.obj.num +' '+props.obj.name}</p>
    </Box>
  )
}

export default NetworkUnit
