import React from 'react'

const ControllerData = (props) => {
    // console.log('ControllerData')
    const unit = props.cData
    // console.log(unit)
    if (!unit) return (<></>)
    else
        return (
            <div>
                <div>
                    {unit.indicators &&
                        <>
                            {'данные по контроллеру ' + unit.title}
                            <div>{unit.indicators.map((obj) => <button key={obj.id}>{obj.title}</button>)}</div>
                        </>
                    }
                </div>
            </div>
        )
}

export default ControllerData
