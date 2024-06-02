import {useState, useEffect} from 'react'
import axios  from 'axios'

export default function Login(){
     
     const [form,setForm] = useState({
        email   : '',
        password: ''})
     const [loding,setLoading] = useState(false)
     const [error,setError] = useState(false)
      
     const{email, password} = form
     
     function handleChange(e){ 
        
     }
       
     function handleSubmit(e){

     }  
    return(<>
       
      <form  onSubmit={handleSubmit}> 
      <label >Email : 
        <input type='text' placeholder='Enter email' value={email}  onChange={handleChange}/>
       </label>
       <label>Password : 
        <input type="text" placeholder='Enter password' name='password' value={password} onChange={handleChange}/>
       </label>
       <input type="submit" name='submit'/>
      </form>
    </>)
}