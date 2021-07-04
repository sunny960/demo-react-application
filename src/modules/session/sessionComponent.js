import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import GetOneOnLiveTraining from "./components/getOneOnLiveTraining";
import StepView from "./components/stepView";
import PersonalizedWorkout from "./components/personalizedWorkout";

const SessionComponent = () => {
    return (<>
        <HeaderComponent hideHeaderMenu={true}/>
        <GetOneOnLiveTraining/>
        <StepView/>
        <PersonalizedWorkout/>
        <ReadyToJoinComponent/>
        <Footer/>

    </>)

}
export default SessionComponent;
