import React from 'react'
import {Field, reduxForm} from 'redux-form'

class CreatePost extends React.Component {
    textField(field){
        return(
            <div className="form-group">
               <label className="form-label">{field.label}</label>
               <input {... field.input } type="text" className="form-control" /> 
            </div>
        )
    }
    textareaField(field){
        return(
            <div className="form-group">
               <label className="form-label">{field.label}</label>
               <textarea {... field.input } rows="6" cols="50" type="text" className="form-control" /> 
            </div>
        )
    }

    optionField(field){
        return(
            <div className="form-group">
               <label className="form-label">{field.label}</label>
               <select {... field.input }  className="form-control">
                   {field.options.map((data)=>(<option key={data}>{data}</option>))} 
               </select>
            </div>
        )
    }

    render() {

        return (
            <div>
                <form className="form col-sm-offset-2 col-sm-8">
                    <Field 
                        name="title"
                        label="Tite :"
                        component = {this.textField} 
                        />

                    <Field 
                        name="category"
                        label="Category :"
                        component = {this.optionField} 
                        options = {['react','redux']}
                        />

                    <Field 
                        name="body"
                        label="Body :"
                        component = {this.textareaField} 
                        />

                    <Field 
                        name="author"
                        label="Author :"
                        component = {this.textField} 
                        />
 
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>)
    }
}

export default reduxForm({
    form: 'CreateForm'
})(CreatePost)