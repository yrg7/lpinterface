import React from 'react'
import styled from 'styled-components';
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
const Box = styled.div`
    grid-area: A1010;
    ${areaStyles}
    ${LevelStyle}
`

const On = () => {
  return (
    <Box>
      время включения
    </Box>
  )
}

export default On
