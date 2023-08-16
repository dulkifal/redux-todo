import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers/index";

const store = configureStore({
    reducer:{
        root: rootReducer
    }
});

export default store;