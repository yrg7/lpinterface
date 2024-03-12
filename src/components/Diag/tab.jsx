import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const Box = styled.div`
grid-area: ${props => props.ga};
background-color: ${props => props.bg};
border-top-right-radius: 10px;
font-size: small;
width: 100%;
/* height: 800px; */
align-self : start;
/* border:1px solid white; */
border-right: 1px solid ${COLORS.border};
border-top: 1px solid ${COLORS.border};
border-left: 1px solid ${COLORS.border};
cursor: pointer;

`

const Tab = (props) => {
  // console.log('Tab')
  const mtclick = ()=>{
    props.tclick(props.id)
  }
  return (
    <Box bg={props.bg} ga={props.ga}  onClick={mtclick} >
      {props.text}
    </Box>
  )
}

export default Tab
