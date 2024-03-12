import React, { useContext } from 'react'
import styled from 'styled-components'

import areaStyles from '../../../../../styles/commonAreaStyles'
import LevelStyle from './LevelStyle'
import { UrlContext } from '../../../../../App'
const Box = styled.div`
    ${areaStyles}
    ${LevelStyle}

    /* display: grid; */

    height: 200px;
    //align-self : stretch;
    /* min-width: 100%; */
    /* background-color: black; */
    border: 1px solid white;
    //grid-template-columns: repeat(6, 1fr);
    padding: 10px;
    margin: 10px;

`

const Controller = (props) => {
  const mUrl = useContext(UrlContext);
  let apiUrl = ''

  // if (mUrl) {
  //   apiUrl=mUrl.ht+'/apkdk-host/Application_data/gui/SelfDiag/ApkDkControllers.xml'
  // }

  const tab = props.iTab
  const fClick = props.fClick
  const index = props.key
  const image = props.image
  // console.log('contr ' + addData)
  // console.log('tab.title '+tab.title+' addData.title'+addData.title)
  return (
    <Box onClick={() => {
      fClick(tab)
      // console.log('fclick  '+tab.title)
    }}>
      <p>{tab.title}</p>
      <div>
        <img src={mUrl.ht + image} />
      </div>

    </Box>
  )
}

export default Controller

// const InContrTab = (props) => {
//   const tab = props.iTab
//   return (
//     <div>
//       <h2>{tab.title}</h2>
//       {/* {tab.indicators.map((ind, index) => <h5 key={index}>{ind.title + ' ' + ind.dev + ' ' + ind.no}</h5>)} */}
//     </div>
//   )
// }