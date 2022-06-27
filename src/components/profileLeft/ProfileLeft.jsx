import React from 'react'

import {LogoSearch,FollowersCard,InfoCard } from '../'

const ProfileLeft = () => {
	return (
		<div className="ProfileSide">
			<LogoSearch/>
			<InfoCard/>
			<FollowersCard/>

		</div>
	)
}

export default ProfileLeft 