import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import Reducers from "./reducers";

const logger = createLogger();

const store = createStore(Reducers, applyMiddleware(logger));

export default store;
