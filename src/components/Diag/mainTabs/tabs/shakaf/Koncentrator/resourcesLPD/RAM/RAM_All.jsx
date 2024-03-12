import React from 'react'
import styled from 'styled-components'
import areaStyles from '../../../../../../../../styles/commonAreaStyles'
import LevelStyle from '../LevelStyle'
import { useSelector } from 'react-redux'
const Box = styled.div`
    grid-area: B1001;
    ${areaStyles}
    ${LevelStyle}
`
const RAMBox = styled.div`
  font-size: 30px;
`
const RAM_All = () => {
  const sensors = useSelector(state => state.sensorsObj.sensorsObj)
  return (
    <Box>
      <p>ОЗУ свободно:</p>
      <RAMBox>
        {sensors.length > 0 ?
          sensors.find(x => x.sensId === 4 && x.devId === 989).val : '???'
        }

      </RAMBox>
    </Box>
  )
}

export default RAM_All
