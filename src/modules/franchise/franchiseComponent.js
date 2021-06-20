import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import BecomePartOfFitness from "./components/becomePartOfFitness";
import OpportunityToJoin from "./components/opportunityToJoin";
import StepBecomeFranchisePartner from "./components/stepBecomeFranchisePartner";

const FranchiseComponent = () => {
    return (<>
        <HeaderComponent/>
        <BecomePartOfFitness/>
        <OpportunityToJoin/>
        <StepBecomeFranchisePartner/>
        <ReadyToJoinComponent/>
        <Footer/>
    </>)

}
export default FranchiseComponent
