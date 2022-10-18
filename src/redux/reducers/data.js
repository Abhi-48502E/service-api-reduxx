import { createSlice } from "@reduxjs/toolkit";


const dataInitState = {
productData:{},
page1Data:{},
page2Data:{},
page3Data:{},

};

const dataSlice = createSlice({
  name: "data",
  initialState: dataInitState,
  reducers: {
    setProductData:((state,action)=>{
        state.productData=action.payload
    }),
    setPag1Data:((state,action)=>{
        state.page1Data=action.payload
    }),
    setPage2Data:((state,action)=>{
        state.page2Data=action.payload
    }),
    setPage3Data:((state,action)=>{
        state.page3Data=action.payload
    }),
  },
});

export const {
    setProductData,
    setPag1Data,
    setPage2Data,
    setPage3Data
    
} = dataSlice.actions;
export default dataSlice.reducer;
