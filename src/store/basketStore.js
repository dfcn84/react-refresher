/* Redux store */

import { createStore } from "redux";
import { basketReducer } from "../reducers/basketReducer";

const basketStore = createStore(basketReducer);

export default basketStore;