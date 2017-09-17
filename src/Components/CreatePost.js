import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {newPost,fetchPost,updatePost} from '../Actions'
import Header from './Header'
import {connect} from 'react-redux'
class CreatePost extends React.Component {

    state = {mode:"new"}
    componentWillMount(){
        const { id } = this.props.match.params;
        if(id){
            this.setState({mode:"edit"})
            this.props.getPost(id).then(() =>{
                const initData = {
                    "title": this.props.post.title,
                    "body": this.props.post.body,
                    "author":this.props.post.author,
                    "category": this.props.post.category
                  };
                this.props.initialize(initData);
            })
        }else{
            this.setState({mode:"new"})
        }
    }
    textField(field){
        const {meta: {touched, error}} = field
        const className = `form-group ${touched && error? 'has-error':''}`
        const disable =  field.disabled?"disabled":""
        return(
            <div className={className}>
                
               <label className="form-label">{field.label}</label>
               <input {... field.input } type="text" className="form-control" disabled={disable}  /> 
               <div className="help-block">
                    { touched&& error  }
               </div>
               
            </div>          
        )
    }
    textareaField(field){
        const {meta: {touched, error}} = field
        const className = `form-group ${touched && error? 'has-error':''}`
        const disable =  field.disabled?"disabled":""
        return(
            <div className={className}>
               <label className="form-label">{field.label}</label>
               <textarea {... field.input } rows="6" cols="50" type="text" className="form-control"   disabled={disable}/> 
               <div className="help-block">
                    { touched&& error  }
               </div>
            </div>
        )
    }

    optionField(field){
        const {meta: {touched, error}} = field
        const className = `form-group ${touched && error? 'has-error':''}`
        const disable =  field.disabled?"disabled":""
        return(
            <div className={className}>
               <label className="form-label">{field.label}</label>
               <select {... field.input }  className="form-control"  disabled={disable}>
                   <option value="-1">Choose an option</option>
                   {field.options.map((data)=>(<option key={data} value={data}>{data}</option>))} 
               </select>
               <div className="help-block">
                    { touched&& error  }
               </div>
            </div>
        )
    }

    onSubmit(values){
        const { id } = this.props.match.params;
        if(id){
            values.id = id
            this.props.updatePost(values).then(() => {
                this.props.history.push('/')
            })
        }
        else{
            this.props.newPost(values)
            .then(() => {
                this.props.history.push('/')
            })
        }

    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <Header></Header>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form col-sm-offset-2 col-sm-8">
                    <Field 
                        name="title"
                        label="Tite :"
                        component = {this.textField} 
                        disabled={false}
                        />

                    <Field 
                        name="category"
                        label="Category :"
                        component = {this.optionField} 
                        options = {['react','redux']}
                        disabled={this.state.mode === "edit"?true:false}
                        />

                    <Field 
                        name="body"
                        label="Body :"
                        component = {this.textareaField} 
                        disabled={false}
                        />

                    <Field 
                        name="author"
                        label="Author :"
                        component = {this.textField} 
                        disabled={this.state.mode === "edit"?true:false}
                        />
 
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>)
    }
}
function validate(values) {
    const errors= {};

    if(!values.title){
        errors.title = "title is required"
    }

    if(!values.body){
        errors.body = "body is required"
    }

    if(!values.author){
        errors.author = "author is required"
    }

    if(values.category === -1 || !values.category){
        
        errors.category = "category is required"
    }
    return errors
}

const mapDispatchToProps = dispatch => ({
    newPost: (post) => dispatch(newPost(post)),
    getPost: (id) => dispatch(fetchPost(id)),
    updatePost: (post) => dispatch(updatePost(post))
})

const mapStateToProps = (state, props) => {
    const { id } = props.match.params
    return {post: state.posts[id] }
}
export default reduxForm({
    validate,
    form: 'CreateForm'
})(
    connect(mapStateToProps,mapDispatchToProps)(CreatePost)
)