import React, { useState } from "react";
import '../../../../DropDown/dropdown.css'
import ADSU from "./ADSU/ADSU";
import PMI_RC from "./PMI_RC/PMI_RC";
import { COLORS } from '../../../../../styles/colors';
import Modal from "../../../../modal/Modal";
import { setActive } from "../../../../../utils/utils";
const ControllersDiag = (props) => {
    const [array, setArray] = useState(
        [
            { id: 1, modal: true, active: false, name: 'АДСУ', component: ADSU },
            { id: 2, modal: true, active: false, name: 'ПМИ-РЦ', component: PMI_RC }

        ]
    )
    return (
        <div className="dropdown">
            {/* <button className="dropbtn">Диагностика контроллеров</button> */}
            <div className={props.m_cl} style={props.m_st}>{props.name}</div>
            <div className="dropdown-content" style={{ backgroundColor: COLORS.back }}>
                {
                    array.map((unit) => {
                        return <div key={unit.id}>
                            {
                                <>
                                    <div className='btn_menue_low' key={unit.id} style={{ color: COLORS.text }} onClick={() => setActive(array, setArray, unit.id, true)}>{unit.name}</div>
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
}

export default ControllersDiag
