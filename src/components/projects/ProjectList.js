import React from "react";
import ProjectSummary from "./ProjectSummary";
import { queryHelpers } from "@testing-library/react";

const ProjectList = ({ helpSomebody }) => {
  return (
    <div className="project-list section">
    {helpSomebody && helpSomebody.map(help => {
      return (
        <ProjectSummary help={help} key= {help.id}/>
      )
    })}
    </div>
  );
};

export default ProjectList;
