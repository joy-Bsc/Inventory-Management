import { errorToast } from "../helper/ValidationHelper";
import { setALLProduct, setTotal } from "../redux/state-slice/product-slice";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import store from "../redux/store/store";
import axios from 'axios';

const BaseURL = "http://localhost:3000/api/v1";

export async function GetProductList(pageNo, perPage, searchKeyword) {
    let URL = `${BaseURL}/ProductList/${pageNo}/${perPage}/${searchKeyword}`;

    store.dispatch(ShowLoader());
    try {
        const result = await axios.get(URL);
        console.log("rr", result);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data.status === "success") {
            const { Rows, Total } = result.data.data[0];
            if (Rows.length > 0) {
                store.dispatch(setALLProduct(Rows));
                store.dispatch(setTotal(Total[0].count));
            } else {
                store.dispatch(setALLProduct([]));
                store.dispatch(setTotal(0));
                errorToast("No Data found");
            }
        } else {
            errorToast("Something went wrong");
        }
    } catch (error) {
        errorToast(error.message);
        store.dispatch(HideLoader());
    }
}
