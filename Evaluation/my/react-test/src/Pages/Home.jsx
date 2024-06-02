import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

export default function Home(){
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
     
     async function fetchDataUpdate(){
        setLoading(true)
        try{
            const res = await axios({
                method: 'get',
                url : 'https://fakestoreapi.com/products'
            })
            setData(res?.data)
            setLoading(false)
            
        }
        catch(error){
           setError(true)
           setLoading(false)
        }
     }

     useEffect(()=>{
        fetchDataUpdate()
     },[])
       console.log(data);

     if(loading){
        return(<h1>Loading...</h1>)
     }
     if(error){
        return(<h1>something went wrong</h1>)
     }

    return(<><h1>Home page</h1>
       
           {data.map(product=>(
            <div key={product.id} style={{border:'2px solid'}}>
               <h2>Title : {product.title}</h2>
                <h3>Category : {product.category}</h3> 
                <Link to='/Product-Details'>More Details...</Link>
            </div>
           ))} 
    </>)
}