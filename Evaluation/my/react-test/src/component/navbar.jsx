import {Link} from 'react-router-dom'

export default function Navbar(){

    return(<div style={{display:'flex', alignItems:'center',justifyContent:'space-evenly',padding:"10px",backgroundColor:"gray"}}>
       <Link to='/Home'>Home</Link>
       <Link to='/Login'>Login</Link>
        
    </div>)
}