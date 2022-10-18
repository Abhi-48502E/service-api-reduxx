import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/data"



const store = configureStore({
    reducer: {
        data: dataReducer,

    },
  });


export const dispatch = store.dispatch;
export default store;
