import React from 'react'
import styled from 'styled-components'
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'

const Box = styled.div`
    grid-area: C1010;
    ${areaStyles}
    ${LevelStyle}
`
const PrjVersion = () => {
  return (
    <Box>
      версия проекта
    </Box>
  )
}

export default PrjVersion
