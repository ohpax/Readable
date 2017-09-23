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
        const commentlength = _.filter(this.props.comments, (comment) => comment.parentId === post.id).length

        return (<div key={post.id} className='post-wrapper row'>
          <div className="col-sm-12">
            <Link to={`/posts/${post.id}`}><h3 className="post-title">{post.title}</h3></Link>
          </div>

          <div className="col-sm-12">
            <div className="pull-right">
              <strong className="">{post.author}</strong> - <Moment format='YYYY/MM/DD'>{post.timestamp}</Moment>
            </div>
          </div>
          <div className="row container">
            <div className="col-sm-1">
              <Vote totalVote={post.voteScore} postId={post.id}></Vote>
            </div>
            <div className="col-sm-11 text-center">
              <p>{post.body}</p>
            </div>
          </div>
          <div className="col-sm-12 text-right">
            <div className="pull-left">
                <small className="badge">category: {post.category}</small>
                <small  className="badge">{commentlength}{commentlength>1?" Comments":" Comment"}</small>
            </div>
            <Link to={`/posts/edit/${post.id}`} className="btn btn-default btn-sm"><Glyphicon glyph="pencil" /></Link>
            <button onClick={() => (this.onDeleteClick.bind(this)(post.id))} className="btn btn-danger btn-sm"><Glyphicon glyph="trash" /></button>
          </div>
        </div>)
      })}
    </div>)
  }

}

export default PostsList;