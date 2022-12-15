import { combineReducers } from "redux";

import trivReducer from "./triv";
import customerReducer from "./customer";
import shopReducer from "./shop";
import adminReducer from "./admin";

export default combineReducers({
  triv: trivReducer,
  customer: customerReducer,
  shop: shopReducer,
  admin: adminReducer,
});
