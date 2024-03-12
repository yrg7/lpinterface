import React from 'react'
import styled from 'styled-components';
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
const Box = styled.div`
    grid-area: B1010;
    ${areaStyles}
    ${LevelStyle}
`
const PoVersion = () => {
  return (
    <Box>
      версия ПО
    </Box>
  )
}

export default PoVersion
