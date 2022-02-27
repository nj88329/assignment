import React, {useState} from 'react';
//  import info from 'info.json';
 import LoginForm from './Components/LoginForm';

const Login = () => {

   const [username, setUsername]=useState({username:''});
  
 
  const admininfo = {
    username:'nj88329',
   password:'123456'
  }

  const logged = info=>{
    console.log(info);

    if(admininfo.username==info.username && admininfo.password==info.password){
      console.log('loggedIn');
      setUsername({
        username:info.username
      })
    }
    else{
      alert('Wrong User');
    }
  }
  const logout = ()=>{
    setUsername({
      username:''
    })
  }

  return (
    <>
      <div>
          {(username.username !== '')?(
            <div style={{'margin':'2%'}}>
              <h2>Welcome Here</h2>
              <div style={{'height':'200px','width':'200px', 'margin':'13%'}}>

                  <div>
                      <div style={{'backgroundColor':'lightcyan'}}>
                      <h1>INCIDENT</h1>
                      <div style={{'backgroundColor':'yellow'}}>
                        <h2>
                          <li>Job is completed</li>
                          <li>Error</li>
                        </h2>  
                     
                      <div style={{'width':'200px', 'height':'100px', 'margin':'30%'}}>
                 
                  </div>
                </div>
              </div>
              <button onClick={logout} style={{'color':'purple'}}>
                   Click me to Logout
                </button>

                  </div>

              </div>
              
               
            </div>
          ):(
        
        <div style={{'margin':'19%'}}>
          <div style={{'height':'200px','width':'550px', 'backgroundColor':'greenyellow','textAlign':'center'}}>
               <LoginForm logged={logged} />
          </div>
        </div>
          )}
      </div>
    </>
    
  )
}

export default Login