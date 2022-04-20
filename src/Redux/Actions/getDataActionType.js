import { actionTypes } from "../Constants/actionTypes";
import {GetApiDetails, PostApiDetails} from "../../api/apiRequest";

export const getData = () => {
    return async function(x) {
        return GetApiDetails().then((res)=>{
            console.log(res);
            x(
                {
                    type : actionTypes.GET_DATA,
                    payload : res.data
                })
             })
             }
            };

export const postData = (request) => {
    return async function(x) {
        return PostApiDetails(request).then((res)=>{
            console.log(res);
            x(
                {
                    type : actionTypes.POST_DATA,
                    payload : ""
                })
             })
             }
            };