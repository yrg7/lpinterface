import React from 'react'
import styled from 'styled-components'
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
const Box = styled.div`
    grid-area: C1000;
    ${areaStyles}
    ${LevelStyle}
`
const HDD1 = () => {
  return (
    <Box>
      HDD
    </Box>
  )
}

export default HDD1
