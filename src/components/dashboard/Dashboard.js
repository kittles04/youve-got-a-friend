import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

class Dashboard extends Component {
  render() {
      const { helpSomebody } = this.props
    return (
      <div class="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList helpSomebody={helpSomebody}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        helpSomebody: state.firestore.ordered
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Help' }
    ])
)(Dashboard);
