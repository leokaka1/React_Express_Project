import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Demo1Reducer} from './reducers/demo1Reducer'

const rootReducer = combineReducers({
    demo1:Demo1Reducer
})

// middleWare
const middleWare = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(   
    applyMiddleware(...middleWare)
))


export default store