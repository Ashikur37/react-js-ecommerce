import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import {persistStore} from 'redux-persist';

const middlewars = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewars));
export const persistor = persistStore(store);
export default {store,persistor};
