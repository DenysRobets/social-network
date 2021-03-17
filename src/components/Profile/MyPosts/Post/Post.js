import React from 'react'
import './Post.css'

const Post = ({ postText }) => {
	return (
		<div className="post_item">
			<img src="https://img5.goodfon.ru/wallpaper/nbig/c/8d/rik-i-morti-rick-and-morty-rick-sanchez-rick-sanchez-multfil.jpg" alt="user_avatar" />
			<div className="post_text">
				<p>{postText}</p>
			</div>
		</div>
	)
}

export default Post
