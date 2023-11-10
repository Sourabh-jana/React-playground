import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import accountReducer from "./reducers/account.reducer";
import bonusReducer from "./reducers/bonus.reducer";
import postReducer from "./reducers/post.reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
    getPosts: postReducer,
  }),
  applyMiddleware(logger, thunk),
);

export default store;