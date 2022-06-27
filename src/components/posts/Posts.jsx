import React from 'react'
import './Posts.css'
import {PostsData} from '../../data/PostData'
import {Post} from '../'

const Posts = () => {
	return (
		<div className="Posts">
			{PostsData.map((post,id)=>
				 <Post data={post} />	)
			}
		</div>
	)
}

export default Posts