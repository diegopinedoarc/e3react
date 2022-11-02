import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";
import { reducers } from "../Reducers/index";

export const store = createStore(reducers, applyMiddleware(reduxThunk));

store.subscribe(() => console.log("Hubo un cambio en el estado"));
