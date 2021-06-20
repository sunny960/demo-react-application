import React from "react";
import HeaderComponent from "../header";
import EveryMomentCountComponent from "../common/everyMomentCountComponent";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import GetFreeTrail from "./components/getFreeTrail";
import TeamMemberDescription from "./components/teamMemberDescription";
import TransformationExpert from "./components/transformationExpert";

const TeamComponent = () => {
    return (<>
        <HeaderComponent/>
        <TransformationExpert/>
        <TeamMemberDescription/>
        <GetFreeTrail/>
        <EveryMomentCountComponent/>
        <ReadyToJoinComponent/>
        <Footer/>

    </>)

}
export default TeamComponent;
