import { combineReducers }      from "redux";
import { routerReducer }        from "react-router-redux";

import general                  from "./general"
import current                  from "./current"

export default combineReducers({
    routing: routerReducer,

    general,
    current,
})