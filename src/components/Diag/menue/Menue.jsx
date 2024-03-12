
import { useState } from 'react';
// import { createPortal } from 'react-dom';
import styled from 'styled-components';
// import ModalContent from '../modalWnd/myModal';
import Modal from '../../modal/Modal'
import './Menue.css';
import ControllersDiag from './mainMenue/ControllersDiag/ControllersDiag';
import Authorization from './mainMenue/Authorization/Authorization';
import Settings from './mainMenue/Settings/Settings';
import Tools from './mainMenue/Tools/Tools';
import Addons from './mainMenue/Addons/Addons';
import RestartTcpServ from './mainMenue/RestartTcpServ/RestartTcpServ';
import RestartLP from './mainMenue/RestartLP/RestartLP';
import SelfDiag from './mainMenue/SelfDiag/SelfDiag';
import { COLORS } from '../../../styles/colors';
import { setActive } from '../../../utils/utils';
const Box = styled.div`
  /* height: 20vh; */

  grid-area: A;
  background-color: black;
  /* color: white; */
  padding: 2px;
  text-align: center;
  display: flex;

flex-direction: row;
`
const Menue = () => {

    const [array, setArray] = useState(
        [
            { id: 1, modal: true, active: false, name: 'Самодиагностика', component: SelfDiag },
            { id: 2, modal: false, active: false, name: 'Контроллеры', component: ControllersDiag },
            { id: 3, modal: true, active: false, name: 'Авторизация', component: Authorization },
            { id: 4, modal: false, active: false, name: 'Настройки', component: Settings },
            { id: 5, modal: false, active: false, name: 'Инструменты', component: Tools },
            { id: 6, modal: false, active: false, name: 'Дополнительно', component: Addons },
            { id: 7, modal: true, active: false, name: 'Перезапуск TCP сервера', component: RestartTcpServ },
            { id: 8, modal: true, active: false, name: 'П', component: RestartLP }
        ]
    )
    return (
        <Box>
            {
                array.map((unit) => {
                    return <div key={unit.id}>
                        {unit.modal ? (
                            <>
                                <div className='btn_menue' style={{color: COLORS.text, backgroundColor: COLORS.back}} onClick={() => setActive(array, setArray, unit.id, true)}>{unit.name}</div>
                                <Modal active={unit.active}  id={unit.id} mArray={array} mSetArray={setArray}>
                                    <unit.component />
                                </Modal>
                            </>
                        ) : (
                            <unit.component m_cl={'btn_menue'} m_st={{color: COLORS.text, backgroundColor: COLORS.back}}  name={unit.name} />
                        )

                        }
                    </div>

                })
            }
        </Box>
    )
}

export default Menue

