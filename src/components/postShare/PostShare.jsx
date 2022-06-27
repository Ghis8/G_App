import React,{useState,useRef} from 'react'
import './PostShare.css'
import profileImage from '../../img/profile.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'


const PostShare = () => {
	const [image, setImage] = useState(null)
	const imageRef = useRef()

	const onImageChange=(event)=>{
		if(event.target.files && event.target.files[0]){
			let img=event.target.files[0];
			setImage({
				image:URL.createObjectURL(img),
			})
		}
	}
	return (
		<div className="PostShare">
			
		
		<img src={profileImage} className="profileimage" alt=""/>
				
			
			<div>
				<input type="text" placeholder="what is happening" name="" id=""/>
				<div className="postOptions">
					<div className="option"
					style={{color:"var(--photo)"}}
					onClick={()=>{imageRef.current.click()}}
					>
						<UilScenery/>
						Photo
					</div>
					<div className="option"
					style={{color:"var(--video)"}}
					>
						<UilPlayCircle/>
						Video
					</div>
					<div className="option"
					style={{color:"var(--location)"}}
					>
						<UilLocationPoint/>
						Map
					</div>
					<div className="option"
					style={{color:"var(--shedule)"}}
					>
						<UilSchedule/>
						calendar
					</div>
					<button className="button ps-button">Share</button>
					<div style={{display:'none'}}>
						<input type="file" name="myImage" ref={imageRef} onClick={onImageChange} />
					</div>
				</div>
				{image && (
					<div className="previewImage">
						 <UilTimes onClick={()=>setImage(null)} />
						 <img src={image.image} alt=""/>
					</div>
				)}
			</div>
		</div>
	)
}

export default PostShare