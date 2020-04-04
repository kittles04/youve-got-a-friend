import React, { Component } from 'react'
import { createHelp } from '../../store/actions/helpActions'
import { connect } from 'react-redux'

 class CreateProject extends Component {
     state = {
        activity: '',
        notes: ''
     }
     handleChange = (e) => {
         this.setState({
            [e.target.id]:e.target.value
         })
     }

     handleSubmit = (e) => {
         e.preventDefault();
         console.log(this.state)
         this.props.createHelp(this.state)
     }
    render() {
        return (
            <div className = "container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Volunteer To Help, What Can you offer the community?</h5>
                <div className="input-field">
                    <label htmlFor="activity">activity </label>
                    <input type="text" id="activity" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="notes">notes </label>
                    <textarea id="notes" className="materialize-textarea" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Get To Helping</button>
                </div>
            </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createHelp: (help) => dispatch(createHelp(help))
    }
} 

export default connect(null, mapDispatchToProps)(CreateProject)
