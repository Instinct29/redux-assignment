import {actionTypes} from '../Constants/actionTypes'

 
const initialState = {
    data : [],
    isDeleteResponse: false
    
    
}
   
export const getDataReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case actionTypes.GET_DATA:
            return {...state, data: payload}
        
        case actionTypes.DELETE_DETAILS:
            return{
                isDeleteResponse:payload
            }  

     
        default :
            return state

        
    }

}



