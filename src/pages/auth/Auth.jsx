import React,{useState} from 'react'
import './Auth.css'
import logo from '../../img/logo.png'

const Auth = () => {
	const [auth,setAuth] = useState(false)

	return (
		<div className="Auth">
			<div className="a-left">

				<img src={logo} alt=""/>
				<div className="Webname">
					<h1>Ghis APP</h1>
					<h6>Explore the ideas throughout the world</h6>
				</div>
			</div>
			{auth ? <Login auth={auth} setAuth={setAuth}/> : <SignUp auth={auth} setAuth={setAuth}/>}
			
		</div>
	)
}
function Login({auth,setAuth}){
	return(
		<div className="a-right ">
			<form className="infoForm authForm" action="">
				<h3>Login</h3>
				<div>
					<input type="text" className="infoInput" placeholder="username" />

				</div>
				<div>
					<input type="password" className="infoInput" placeholder="Password" name="password"/>
				</div>
				<div>
					
				</div>
				<div>
					<span style={{fontSize:'12px'}}>Don't have an account?  <b onClick={()=>setAuth(null)}>Signup!</b></span>
				</div>
				<button className="button infoButton" type="submit">Signup</button>
				
			</form>
		</div>
		)
}


function SignUp({auth,setAuth}){
	return(
		<div className="a-right">
			<form className="infoForm authForm" action="">
				<h3>Sign Up</h3>

				<div>
					<input type="text" placeholder="First Name" className="infoInput" name="firstname"/>
					<input type="text" placeholder="Last Name" className="infoInput" name="lastname"/>
				</div>
				<div>
					<input type="text" className="infoInput" placeholder="username" />

				</div>
				<div>
					<input type="password" className="infoInput" placeholder="Password" name="password"/>
					<input type="password" className="infoInput " placeholder="Confirm Password" name="comfirmpassword"/>
				</div>
				<div>
					
				</div>
				<div>
					<span style={{fontSize:'12px'}}>Already have an account.  <b onClick={()=>setAuth(true)}>Login!</b></span>
				</div>
				<button className="button infoButton" type="submit">Signup</button>
				
			</form>
		</div>
		)
}
export default Auth