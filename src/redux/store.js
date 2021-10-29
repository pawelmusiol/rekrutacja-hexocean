import { createStore, compose } from 'redux'
import combinedReducers from './reducers'
//import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(

);

export default createStore(
    combinedReducers,
    enhancer,
)