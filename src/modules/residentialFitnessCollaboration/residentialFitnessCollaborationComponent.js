import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import ResidentialTraining from "./components/residentialTraining";
import YouTube from "./components/youTube";
import TextualContent from "./components/textualContent";
import AdvanceConvenientAffordable from "./components/advanceConvenientAffordable";

const ResidentialFitnessCollaborationComponent = () => {
    return (<>
        <HeaderComponent hideHeaderMenu={true}/>
        <AdvanceConvenientAffordable/>
        <TextualContent/>
        <YouTube/>
        <ResidentialTraining/>
        <ReadyToJoinComponent/>
        <Footer/>
    </>)

}
export default ResidentialFitnessCollaborationComponent