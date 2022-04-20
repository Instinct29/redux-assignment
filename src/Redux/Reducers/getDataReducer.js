import React from 'react'
import {actionTypes} from '../Constants/actionTypes'

 
const initialState = {
    data : [],
}
   
export const getDataReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case actionTypes.GET_DATA:
            return {...state, data: payload}
        default :
            return state
    }

}



