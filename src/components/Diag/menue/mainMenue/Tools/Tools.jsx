import React, {useState} from 'react'
import '../../../../DropDown/dropdown.css'

const Tools = (props) => {

    // const [array, setArray] = useState(
    //     [
    //         { id: 1, modal: true, active: false, name: 'Таблица сигналов', component: AppSettings },
    //         { id: 2, modal: true, active: false, name: 'Измерения времени', component: SettingsLoadSystem },
    //         { id: 3, modal: true, active: false, name: 'Настройка на станцию', component: SettingsOnSt },
    //         { id: 4, modal: true, active: false, name: 'Обновление системы', component: SystemRestyle },
    //         { id: 5, modal: true, active: false, name: 'Восстановление системы', component: SystemRepair },

    //     ]
    // )

  return (
    <div className="dropdown">
            {/* <button className="dropbtn">Диагностика контроллеров</button> */}
            <div className={props.m_cl}  style={props.m_st}>{props.name}</div>
            <div className="dropdown-content">
                <div>
                    <button>Ссылка 1</button>
                </div>
                <div>
                    <button >Ссылка 2</button>
                </div>
                <div>
                    <button >Ссылка 3</button>
                </div>

            </div>
        </div>
  )
}

export default Tools
