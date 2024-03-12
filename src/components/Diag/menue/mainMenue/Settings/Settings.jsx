import React, { useState, useEffect } from "react";
import '../../../../DropDown/dropdown.css'
import AppSettings from './appSettings/AppSettings'
import SettingsLoadSystem from "./SettingsLoadSystem/SettingsLoadSystem";
import { COLORS } from '../../../../../styles/colors';
import Modal from "../../../../modal/Modal";
import '../../../menue/Menue.css'
import SettingsOnSt from "./SettingsOnSt/SettingsOnSt";
import SystemRestyle from "./SystemRestyle/SystemRestyle";
import SystemRepair from "./SystemRepair/SystemRepair";
import { setActive } from "../../../../../utils/utils";
// import payload from './myjson.json'

const Settings = (props) => {

 
    const [array, setArray] = useState(
        [
            { id: 1, modal: true, active: false, name: 'Настройка концентратора', component: AppSettings },
            { id: 2, modal: true, active: false, name: 'Настройка загрузки системы', component: SettingsLoadSystem },
            { id: 3, modal: true, active: false, name: 'Настройка на станцию', component: SettingsOnSt },
            { id: 4, modal: true, active: false, name: 'Обновление системы', component: SystemRestyle },
            { id: 5, modal: true, active: false, name: 'Восстановление системы', component: SystemRepair },

        ]
    )

    return (
        <div className="dropdown">
            {/* <button className="dropbtn">Диагностика контроллеров</button> */}
            <div className={props.m_cl} style={props.m_st}>{props.name}</div>
            <div className="dropdown-content" style={{backgroundColor: COLORS.back }}>
                {
                    array.map((unit) => {
                        return <div key={unit.id}>
                            {
                                <>
                                    <div className='btn_menue_low' style={{ color: COLORS.text}} onClick={() => setActive(array,setArray,unit.id, true)}>{unit.name}</div>
                                    {/* <Modal active={unit.active} setActive={setActive} id={unit.id}> */}
                                    <Modal active={unit.active}  id={unit.id} mArray={array} mSetArray={setArray}>
                                        <unit.component />
                                    </Modal>
                                </>
                            }

                        </div>

                    })
                }




            </div>
        </div>
    )
};

export default Settings;
