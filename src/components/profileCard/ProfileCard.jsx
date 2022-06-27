import React from 'react'
import './ProfileCard.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profile.jpg'
import {Link} from 'react-router-dom'


const ProfileCard = () => {
	const ProfilePage=true
	return (
		<div className="ProfileCard">
		<Link to="/profile">
			<div className="ProfileImages">
				<img src={cover} alt=""/>
				<img src={profile} alt=""/>
			</div>
		</Link>
			<div className="ProfileName">
				<span>Ghislain Kongolo</span>
				<span>UI/UX Designer</span>
			</div>

			<div className="followStatus">
				<hr />
				<div>
					<div className="follow">
						<span>7,906</span>
						<span>Followers</span>
					</div>
					<div className="vl"></div>
					<div className="follow">
						<span>246</span>
						<span>Following</span>
					</div>
					{
						ProfilePage &&(
							<>
								<div className="vl">
									
								</div>
								<div className="follow">
									<span>3</span>
									<span>Posts</span>
								</div>
							</>
							)
					}
				</div>
				<hr />
			</div>
			{ProfilePage ? '': <span>My Profile</span>}
			
		</div>
	)
}

export default ProfileCard