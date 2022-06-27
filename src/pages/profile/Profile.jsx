import React from 'react'
import './Profile.css'
import {ProfileLeft,PostSide,ProfileCard,RightSide} from '../../components'
const Profile = () => {
	return (
		<div className="Profile">
			<ProfileLeft/> 
			<div className="Profile-center">
				<ProfileCard/>
				<PostSide/>
			</div>
			<RightSide/>
			
		</div>
	)
}

export default Profile