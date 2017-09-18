import React from 'react'
import './Comment.css'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {newComment} from '../Actions'
class Comment extends React.Component {

    textareaField(field){
        const {meta: {touched, error}} = field
        const className = `${touched && error? 'has-error':''}`
        return (
            <div className={className}>
               <textarea {... field.input } className="comment-box form-control"  placeholder="Write you comment ..."  /> 
               <div className="help-block">
                    { touched && error  }
               </div>
            </div>
        )
    }

    textField(field){
        const {meta: {touched, error}} = field
        const className = `${touched && error? 'has-error':''}`
        return(
            <div className={className}>
                
               <label className="form-label">{field.label}</label>
               <input {... field.input } type="text" className="form-control" placeholder="Name"  /> 
               <div className="help-block">
                    { touched && error  }
               </div>
               
            </div>          
        )
    }
    onSubmit(values){
        values.parentId = this.props.parentId
        this.props.newComment(values).then(() => {
            this.props.reset();
        })
    }
    render(){
        const { handleSubmit } = this.props
        return (
            <div className="row">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
                    
                    <Field name="author" component={this.textField} /> 
                    <Field name="body" component={this.textareaField} />
                    <button className="btn btn-default pull-right ">Post</button>      
                </form>
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {}

    if(!values.body){
        errors.body = "comment message is required"
    }
    if(!values.author){
        errors.author = "Please write your name"
    }
    return errors
}

const mapDispatchToProps = dispatch => {
    return {
        newComment: (id) => dispatch(newComment(id))
    }
}

export default reduxForm({
    validate,
    form: "CommentForm",
})(connect(null,mapDispatchToProps)(Comment))