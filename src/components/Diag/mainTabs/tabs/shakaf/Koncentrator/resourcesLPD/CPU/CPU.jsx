import React from 'react'
import styled from 'styled-components'
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
import { useSelector } from 'react-redux'
const Box = styled.div`
    grid-area: A1001;
    ${areaStyles}
    ${LevelStyle}
`
const CpuBox = styled.div`
  font-size: 30px;
`

const CPU = () => {
  const sensors = useSelector(state => state.sensorsObj.sensorsObj)
  return (
    <Box>
      <p>загрузка ЦПУ</p>
      <CpuBox>
          
        { sensors.length > 0 ?
          sensors.find(x => x.sensId === 0 && x.devId===989).val : '???'  
         }%
        
      </CpuBox>
        
    </Box>
  )
}

export default CPU
