import React from "react";
import * as actionTypes from "./actionType";
import axios from "axios";


export const getFalts = () => async (dispatch, getState) => {


    try {

        dispatch({
            type: actionTypes.FETCH_FLATS_START
        })


        const {data} = await axios.get("https://yourrommate.up.railway.app")

        dispatch({
            type: actionTypes.FETCH_FLATS_SUCCESS,
            payload: data
        })

    }catch(E) {

    }

}