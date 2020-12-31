import {
  Store,
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import {rootSaga} from "./sagas";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<WorkState, WorkAction> & {
  dispatch: DispatchType
} = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
