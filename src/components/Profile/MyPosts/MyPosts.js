import React from 'react'
import './MyPosts.css'
import Post from "./Post/Post";


const MyPosts = () => {
	return (
		<div>
			My Posts
			<div>
				<textarea name="" id="" cols="60" rows="5"></textarea>
				<button>Add post</button>
			</div>
			<div className="posts_wrapper">
				<Post postText="Hello! It's my firs post." />
				<Post postText="This is my react-project!" />
				<Post postText="Start 25.02.2021!" />
			</div>
		</div>
	)
}

export default MyPosts
