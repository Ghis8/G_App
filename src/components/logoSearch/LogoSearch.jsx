import React from 'react'
import logo from '../../img/logo.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'
const LogoSearch = () => {
	return (
		<div className="LogoSearch">
			<Link to="/">
				<img src={logo} alt=""/>
			</Link>
			<div className="Search">
				<input type="text" name="" placeholder='#explore'/>
				<div className='s-icon'>
					<UilSearch/>
				</div>
			</div>
		</div>
	)
}

export default LogoSearch