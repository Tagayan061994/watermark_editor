import { createStore, combineReducers } from "redux";
import { textConfigs } from "./reducers/textConfigs";

const enhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const appReducers = combineReducers({
  textConfigs,
});

export const store = createStore(appReducers, enhancers);
