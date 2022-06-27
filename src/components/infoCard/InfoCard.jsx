import React,{useState} from 'react'
import './InfoCard.css'
import {ProfileModal} from '../'
import {UilPen} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const InfoCard = () => {

	const [modalOpened,setModalOpened]=useState(false)

	return (
		<div className="InfoCard">
			<div className="infoHead">
				<h4>Your Info</h4>
				<div>
					<UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />	
					<ProfileModal 
					modalOpened={modalOpened} 
					setModalOpened={setModalOpened}
					/>
				</div>
				
			</div> 
			<div className="info">
				<span><b>Status </b></span>
				<span>in Relationship</span>
			</div>
			<div className="info">
				<span><b>Lives in </b></span>
				<span>Rwanda</span>
			</div>
			<div className="info">
				<span><b>Works at </b></span>
				<span>Google</span>
			</div>
			<Link to="/authentication">
				<button className="button logout-button">Logout</button>
			</Link>
		</div>
	)
}

export default InfoCard