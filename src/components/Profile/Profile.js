import React from 'react'
import './Profile.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<div className="content">
			<div className="profile_wallpapper">
				<img src="https://funart.pro/uploads/posts/2020-05/1588590885_17-p-golubie-neonovie-foni-66.jpg" alt="cover" />
			</div>
			<div>
				avatar + description
			</div>
			<MyPosts />

		</div>
	)
}

export default Profile
