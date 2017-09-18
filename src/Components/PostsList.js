import React from 'react'
import Moment from 'react-moment'
import Vote from './Vote'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './PostsList.css'
import { Glyphicon } from 'react-bootstrap'

class PostsList extends React.Component {
  onDeleteClick(id) {
    this.props.removePost(id)
  }
  render() {
    return (<div className='posts-container'>
      {_.map(this.props.posts, post => {
        if (post.deleted)
          return;
        return (<div key={post.id} className='post-wrapper row'>
          <div className="col-sm-12">
            <Link to={`/posts/${post.id}`}><h3 className="post-title">{post.title}</h3></Link>
          </div>
          <div className="col-sm-12">
            <p>{post.body}</p>

          </div>
          <div className="col-sm-1">
            <Vote totalVote={post.voteScore} postId={post.id}></Vote>

          </div>
          <div className="col-sm-10">
            <small>date: <Moment format='YYYY/MM/DD'>{post.timestamp}</Moment></small>
            <br />
            <small>category: {post.category}</small>
            <br />
            <small>author: {post.author}</small>
          </div>
          <div className="col-sm-1">
            <Link to={`/posts/edit/${post.id}`} className="btn btn-default btn-sm"><Glyphicon glyph="pencil" /></Link> <br />
            <button onClick={() => (this.onDeleteClick.bind(this)(post.id))} className="btn btn-danger btn-sm"><Glyphicon glyph="trash" /></button>
          </div>
        </div>)
      })}
    </div>)
  }

}

export default PostsList;