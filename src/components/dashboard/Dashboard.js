import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux'

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
    return{
        helpSomebody: state.help.helpProjects
    }
}

export default connect(mapStateToProps)(Dashboard);
