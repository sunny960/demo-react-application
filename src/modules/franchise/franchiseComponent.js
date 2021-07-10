import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import BecomePartOfFitness from "./components/becomePartOfFitness";
import OpportunityToJoin from "./components/opportunityToJoin";
import StepBecomeFranchisePartner from "./components/stepBecomeFranchisePartner";
import ReadyToStarted from "./components/readyToStarted";

const FranchiseComponent = () => {
    return (<>
        <HeaderComponent/>
        <BecomePartOfFitness/>
        <OpportunityToJoin/>
        <StepBecomeFranchisePartner/>
        <ReadyToStarted/>
        <Footer/>
    </>)

}
export default FranchiseComponent
