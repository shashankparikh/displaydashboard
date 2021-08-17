import { combineReducers } from "redux";

import builder from "./containers/App/builder-project/reducer";
import billBoard from './containers/App/BillBoard/reducer';


export default combineReducers({
builder,
billBoard
});