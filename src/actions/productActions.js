
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../contants/productConstants";


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })


        const res = await fetch("http://localhost:3000/api/products")
        const data = await res.json();

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}