const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER'
const CHANGE_CUSTOMER = 'CHANGE_CUSTOMER'
const defaultState = {
    customers: []
}
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMER:
            return { ...state, customers: [...state.customers, ...action.payload] }
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case REMOVE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
      
        case CHANGE_CUSTOMER:
            return { ...state, customers: state.customers.map(customer => {
                if(customer.id === action.dop){
                    return {...customer, name: action.payload}
                } 
                return customer 
            })}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const changeCustomerAction = (payload, dop) => ({ type: CHANGE_CUSTOMER, payload, dop })
