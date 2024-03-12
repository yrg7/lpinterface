import styled from 'styled-components';
import commonTabStyles from '../../../../../styles/commonTabStyles'
const Box = styled.div`
  background-color: ${obj => obj.bg}; 
 ${commonTabStyles}

`

const Tab = (props) => {
  const mtclick = ()=>{
    props.tclick(props.obj.id)
  }
  return (
    <Box bg={props.obj.bg}  onClick={mtclick} >
      {props.obj.name}
    </Box>
  )
}

export default Tab
