import React from 'react'
import '../../../../DropDown/dropdown.css'
const Addons = (props) => {
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

export default Addons
