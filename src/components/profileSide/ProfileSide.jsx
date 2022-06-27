import React from 'react'
import './ProfileSide.css'
import {LogoSearch,ProfileCard,FollowersCard} from '../' 

const ProfileSide = () => {

	return (
		<div className="ProfileSide">
			<LogoSearch/>
			<ProfileCard/>
			<FollowersCard/>
		</div>
	)
}

export default ProfileSide