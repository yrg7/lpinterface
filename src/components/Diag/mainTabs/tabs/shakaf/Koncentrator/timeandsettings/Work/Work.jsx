import React from 'react'
import styled from 'styled-components';
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
const Box = styled.div`
    grid-area: A1011;
    ${areaStyles}
    ${LevelStyle}
`


const Work = () => {
  return (
    <Box>
      время работы
    </Box>
  )
}

export default Work
