import React from 'react'
import Moment from 'react-moment'
import Vote from './Vote'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import './PostsList.css'


 const PostsList = (props) => {
    return  (<div className='posts-container'>
    { _.map(props.posts,post => {
      return (<div key={post.id} className='post-wrapper'>
        <div className="col-sm-12">
          <Link to={`/posts/${post.id}`}><h3 className="post-title">{post.title}</h3></Link>             
        </div>
          <p>{post.body}</p>
          <small>date: <Moment format='YYYY/MM/DD'>{post.timestamp}</Moment></small>
          <br/>
          <small>category: {post.category}</small>
          <br/>
          <small>author: {post.author}</small>
          <br/>
          <Vote totalVote={post.voteScore} postId={post.id}></Vote>
        </div>)
    })}
    </div>)
  }

  export default PostsList;