import React,{useState} from 'react';


const LoginForm = ({logged}) => {
    const [info, setUser] = useState({username:'', password:''})

    
    const  signIn=(e)=>{
        e.preventDefault();
        logged(info);
       }
           
  return (
    <>

<div className='box' style={{'width':'130px','marginTop':'10%', 'marginLeft':'40%'}}>
                  <form onSubmit={signIn} action = "" style={{'display':'inline', 'margin':"30%",'backgroundColor':"grey"}}>
                    <div style={{'display':'flex', 'flexDirection': 'column'}}>
                      <div style={{'display':'flex', 'flexDirection': 'column'}}>
                        <label htmlFor='username'>Username  </label>
                          <input type="text" name="username" id="username" style={{'width':'300px'}} 
                          
                          onChange={(e)=>setUser({...info,username:e.target.value})}
                          value={info.username}
                          required />
                      </div>
                      <div style={{'display':'flex', 'flexDirection': 'column'}}>
                          <label htmlFor='password'>Password  </label>
                          <input type="password" name="password" id="password" style={{'width':'300px'}} 
                
                         
                          onChange={(e)=>setUser({...info,password:e.target.value})}
                          value={info.password}
                          required/>
                      </div>
                      
                      <button   type="submit" style={{'width':'130px','marginTop':'10%', 'marginLeft':'50%'}} >Click me to login</button>
                    
                      
                    </div>
                  </form>
              </div>


    </>
  )
}

export default LoginForm