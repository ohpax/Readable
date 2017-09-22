import React from 'react'
import './Comment.css'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {updateComment} from '../Actions/CommentActions'
class CommentEdit extends React.Component {
    componentWillMount(){
        const {comment} = this.props
        const initData = {
            "body": comment.body,
            "author": comment.author,
            };
        this.props.initialize(initData);

    }
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
        values.parentId = this.props.comment.parentId
        values.id = this.props.comment.id
        this.props.updateComment(values).then(() => {
            this.props.closeModal();
        })
    }

    render(){
        const { handleSubmit } = this.props
        return (
            <div className="row">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
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
        updateComment: (id) => dispatch(updateComment(id))
    }
}

export default reduxForm({
    validate,
    form: "CommentEditForm",
})(connect(null,mapDispatchToProps)(CommentEdit))