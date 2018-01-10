import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'remote-redux-devtools'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)(createStore);

export default configureStore = () => {
  const store = createStoreWithMiddleware(rootReducer)
  return store
}