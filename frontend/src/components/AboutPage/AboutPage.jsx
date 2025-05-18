import React from "react";
import ProjectSummary from "../ProjectSummary/ProjectSummary";
import IntentInfo from "../IntentInfo/IntentInfo";
import AnsweringSystemInfo from "../AnsweringSystemInfo/AnsweringSystemInfo";

const AboutPage = () => {
  return (
    <div>
      <ProjectSummary />
      <IntentInfo />
      <AnsweringSystemInfo/>
      
    </div>
  );
};

export default AboutPage;
