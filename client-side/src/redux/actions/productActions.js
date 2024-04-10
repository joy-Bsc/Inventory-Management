import { GetProductList } from '../../APIRequest/APIRequest';

// Action types
export const SET_ALL_PRODUCT = 'SET_ALL_PRODUCT';
export const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
export const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE';

// Action creators
export const setAllProduct = (products, total) => ({
  type: SET_ALL_PRODUCT,
  payload: { products, total },
});

export const fetchProductListRequest = () => ({
  type: FETCH_PRODUCT_LIST_REQUEST,
});

export const fetchProductListSuccess = (products, total) => ({
  type: FETCH_PRODUCT_LIST_SUCCESS,
  payload: { products, total },
});

export const fetchProductListFailure = (error) => ({
  type: FETCH_PRODUCT_LIST_FAILURE,
  payload: { error },
});

// Thunk action creator for fetching product list
export const fetchProductList = (pageNo, perPage, searchKeyword) => {
  return async (dispatch) => {
    dispatch(fetchProductListRequest()); // Dispatch action to indicate start of fetching

    try {
      // Call API to fetch product list
      const response = await GetProductList(pageNo, perPage, searchKeyword);
      const { data } = response;

      // Dispatch success action with fetched data
      dispatch(fetchProductListSuccess(data.Rows, data.Total[0].count));
    } catch (error) {
      // Dispatch failure action if fetching fails
      dispatch(fetchProductListFailure(error));
      console.error('Error fetching product list:', error);
      // Handle error if needed
    }
  };
};
