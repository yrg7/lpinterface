// const ADD_SENSOR = 'ADD_SENSOR'
// const REMOVE_SENSOR = 'REMOVE_SENSOR'
// const ADD_MANY_SENSOR = 'ADD_MANY_CUSTOMER'
const CHANGE_SENSOR = 'CHANGE_SENSOR'
const CHANGE_SENSORS = 'CHANGE_SENSORS'
const CREATE_SENSORS = 'CREATE_SENSORS'
const CHANGE_SENSORS_UNK ='CHANGE_SENSORS_UNK'
// const defaultState = {
//     customers: []
// }

const defaultState = {
    //     devices: [
    //     {device_num: 10, sensors: [[1,10], [2,23], [3,4], [5,10]] },
    //     {device_num: 11, sensors: [[1,10], [2,23], [3,4], [5,10]] },
    //     {device_num: 28, sensors: [[1,10], [2,23], [3,4], [5,10]] },
    //     {device_num: 100, sensors: [[1,10], [2,23], [3,4], [5,10]] }
    // ]}

    sensorsObj: [
        // { name: '989_0', val: 0 },
        // { name: '989_1', val: 0 },
        // { name: '989_2', val: 0 },
        // { name: '989_3', val: 0 },
        // { name: '989_4', val: 0 },
        // { name: '989_5', val: 0 },
        // { name: '989_6', val: 0 },
        // { name: '989_7', val: 0 },
        // { name: '989_8', val: 0 },
        // { name: '989_9', val: 0 },
        // { name: '989_10', val: 0 },
        // { name: '989_11', val: 0 },
        // { name: '989_12', val: 0 },
        // { name: '989_13', val: 0 },
        // { name: '989_14', val: 0 },
        // { name: '989_15', val: 0 },
        // { name: '989_16', val: 0 },
        // { name: '989_17', val: 0 },
        // { name: '989_18', val: 0 },
        // { name: '989_19', val: 0 },
        // { name: '989_20', val: 0 },
        // { name: '989_21', val: 0 },
        // { name: '989_22', val: 0 },
        // { name: '989_23', val: 0 },
        // { name: '989_24', val: 0 },
        // { name: '989_25', val: 0 },
        // { name: '989_26', val: 0 },
        // { name: '989_27', val: 0 },
    ]
}


export const sensorsObjReducer = (state = defaultState, action) => {
    switch (action.type) {

        case CREATE_SENSORS:
            return {
                ...state, sensorsObj: [...state.sensorsObj, ...action.payload]
            }
        
        case CHANGE_SENSOR:
            return {

                ...state, sensorsObj: state.sensorsObj.map(so => {
                    // console.log(action.payload)
                    if (so.devId === action.devId && so.sensId === action.sensId) {
                        
                        return { ...so, val: action.val }
                    }
                    return so
                })

            }
            case CHANGE_SENSORS_UNK:
                return {
    
                    ...state, sensorsObj: state.sensorsObj.map(so => {
                            return { ...so,val:'???' }
                       
                    })
    
                }
           
        case  CREATE_SENSORS:
            return {
                //  ...state, sensorsObj: [...state.sensorsObj, ...action.payload] }
                ...state, sensorsObj: [...state.sensorsObj, ...action.payload]
            }



        default:
            return state
    }
}

// export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
// export const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMER, payload })
// export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const changeSensorAction = (devId, sensId, val) => ({ type: CHANGE_SENSOR, devId, sensId, val })
export const changeSensorsAction = (payload) => ({ type: CHANGE_SENSORS, payload })
export const createSensorsAction = (payload) => ({ type: CREATE_SENSORS, payload })
export const changeSensorsUnkAction = () => ({ type: CHANGE_SENSORS_UNK })