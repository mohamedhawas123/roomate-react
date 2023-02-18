import * as actionType from '../actions/actionType'



const initalState = {
    loading: true,
    error: null,
    flats : []
}





const reducer = (state=initalState, action) =>  {

    switch(action.type) {
        case actionType.FETCH_FLATS_START: return {...state, loading: true };
        case actionType.FETCH_FLATS_SUCCESS: return {...state, loading: action.payload };
        case actionType.FETCH_FLATS_FAIL: return {...state, error: action.error };


    

}