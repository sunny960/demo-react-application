import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import GetOneOnLiveTraining from "./components/getOneOnLiveTraining";
import StepView from "./components/stepView";

const SessionComponent = () => {
    return (<>
        <HeaderComponent hideHeaderMenu={true}/>
        <GetOneOnLiveTraining/>
        <StepView/>
        <ReadyToJoinComponent/>
        <Footer/>

    </>)

}
export default SessionComponent;
