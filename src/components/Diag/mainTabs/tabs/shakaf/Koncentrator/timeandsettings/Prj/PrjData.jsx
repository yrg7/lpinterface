import React from 'react'
import styled from 'styled-components'
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
const Box = styled.div`
    grid-area: C1011;
    ${areaStyles}
    ${LevelStyle}
`
const PrjData = () => {
  return (
    <Box>
      дата проекта
    </Box>
  )
}

export default PrjData