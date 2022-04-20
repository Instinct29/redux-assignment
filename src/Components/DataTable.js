import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../Redux/Actions/getDataActionType";

const DataTable = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.finalData.data)

 
        
    

    useEffect(()=>{
      dispatch(getData());

    },[dispatch])
    
    
  return (
    <div>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((eachData)=>{
            return(
                <tr>
                <td>{eachData.id}</td>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.phone}</td>
                <td>{eachData.country}</td>
               </tr>
            )      
        })
    }
 
  </tbody>
</table>

        



    </div>
  )
}

export default DataTable



















   // const fetchData = async () => {
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err)=>{
    //         console.log("This is the error",err)
    //     })
