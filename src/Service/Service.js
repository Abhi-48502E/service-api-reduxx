import ApiEndpoints from "../Core/apiEndPoints";
import httpClient from "../Core/axios";
import { setPag1Data, setPage2Data, setPage3Data, setProductData } from "../redux/reducers/data";
import { dispatch } from "../redux/store";

export const ProductApi = async () => {
    // Set Loading


    try {

        // Api call
        const resp = await httpClient().get(ApiEndpoints.product)

        // Handle Error
        if (resp.status > 201) {
            console.log(resp);
            throw new Error(resp.data.message);
        }

        //   Update to store
        console.log(resp);
        dispatch(setProductData(resp.data))


        return true;
    } catch (error) {
        // Set Error message to store
        console.log(error);
        return false;
    }
}


export const Page1Api = async () => {
    // Set Loading


    try {

        // Api call
        const resp = await httpClient().get(ApiEndpoints.page1)

        // Handle Error
        if (resp.status > 201) {
            console.log(resp);
            throw new Error(resp.data.message);
        }

        //   Update to store
        console.log(resp);
        dispatch(setPag1Data(resp.data))


        return true;
    } catch (error) {
        // Set Error message to store
        console.log(error);
        return false;
    }
}
export const Page2Api = async () => {
    // Set Loading


    try {

        // Api call
        const resp = await httpClient().get(ApiEndpoints.page2)

        // Handle Error
        if (resp.status > 201) {
            console.log(resp);
            throw new Error(resp.data.message);
        }

        //   Update to store
        console.log(resp);
        dispatch(setPage2Data(resp.data))


        return true;
    } catch (error) {
        // Set Error message to store
        console.log(error);
        return false;
    }
}
export const Page3Api = async () => {
    // Set Loading


    try {

        // Api call
        const resp = await httpClient().get(ApiEndpoints.page3)

        // Handle Error
        if (resp.status > 201) {
            console.log(resp);
            throw new Error(resp.data.message);
        }

        //   Update to store
        console.log(resp);
        dispatch(setPage3Data(resp.data))


        return true;
    } catch (error) {
        // Set Error message to store
        console.log(error);
        return false;
    }
}