import React from 'react'
import styled from 'styled-components'
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
import { useSelector } from 'react-redux'

const Box = styled.div`
    grid-area: A1000;
    ${areaStyles}
    ${LevelStyle}
`
const Temper = styled.div`
    font-size: 40px;
`
const Temperatura = () => {
  const sensors = useSelector(state => state.sensorsObj.sensorsObj)
  return (
    <Box>
      <p>температура</p>
      <Temper>
        
          
        { sensors.length > 0 ?
          sensors.find(x => x.sensId === 7 && x.devId===989).val : '???'  
         }&deg;
        </Temper>
    </Box>
  )
}

export default Temperatura

