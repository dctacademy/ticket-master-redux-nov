import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentsReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        customers: customersReducer,
        departments: departmentsReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore