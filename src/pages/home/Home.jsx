import React from 'react'
import './Home.css'
import {ProfileSide,PostSide,RightSide} from '../../components'


const Home = () => {
	return (
		<div className="Home">
			<ProfileSide/>
			<PostSide/>
			<RightSide/>
		</div>
	)
}

export default Home 