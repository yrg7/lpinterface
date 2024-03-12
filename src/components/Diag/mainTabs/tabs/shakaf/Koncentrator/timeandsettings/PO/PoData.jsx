import React from 'react'
import styled from 'styled-components';
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
const Box = styled.div`
    grid-area: B1011;
    ${areaStyles}
    ${LevelStyle}
`
const PoData = () => {
  return (
    <Box>
      дата ПО
    </Box>
  )
}

export default PoData
