import { actionTypes } from "../Constants/actionTypes";
import {GetApiDetails, PostApiDetails} from "../../api/apiRequest";

export const getData = () => {
    return async function(dispatch) {
        return GetApiDetails().then((res)=>{
            console.log(res);
            console.log("Dispatch is___________",dispatch);
            dispatch(
                {
                    type : actionTypes.GET_DATA,
                    payload : res.data
                })
             })
             }
            };

export const postData = (request) => {
    return async function(dispatch) {
        return PostApiDetails(request).then((res)=>{
            console.log(res);
            dispatch(
                {
                    type : actionTypes.POST_DATA,
                    payload : ""
                })
             })
             }
            };