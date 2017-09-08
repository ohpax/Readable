import React from 'react'
import Moment from 'react-moment'
import Vote from './Vote'


 const PostsList = (props) => {
    return  (<div className='posts-container'>
    {props.posts.map( post => {
      return (<div key={post.id} className='post-wrapper'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>date: <Moment format='YYYY/MM/DD'>{post.timestamp}</Moment></small>
          <br/>
          <small>category: {post.category}</small>
          <br/>
          <small>author: {post.author}</small>
          <br/>
          <small>vote: {post.voteScore}</small>
          <Vote totalVote={post.voteScore} postId={post.id}></Vote>
        </div>)
    })}
    </div>)
  }

  export default PostsList;