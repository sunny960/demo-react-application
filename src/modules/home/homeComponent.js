import React from "react";
import HeaderComponent from "../header";
import ImageComponent from "./components/imageComponent";
import RedefineFitnessComponent from "./components/redefineFitnessComponent";
import OurBrandPresenceComponent from "./components/ourBrandPresenceComponent";
import YoutubeImageComponent from "./components/youtubeImageComponent";
import InvestInWhatMatterComponent from "./components/investInWhatMatterComponent";
import GetStartedComponent from "./components/getStartedComponent";
import OurFitnessProgramComponent from "./components/ourFitnessProgram";
import MeetTheTeamComponent from "./components/meetTheTeamComponent";
import EveryMomentCountComponent from "../common/everyMomentCountComponent";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";

const HomeComponent = () => {
    return (<>
        <HeaderComponent/>
        <ImageComponent/>
        <RedefineFitnessComponent/>
        <OurBrandPresenceComponent/>
        <YoutubeImageComponent/>
        <InvestInWhatMatterComponent/>
        <GetStartedComponent/>
        <OurFitnessProgramComponent/>
        <MeetTheTeamComponent/>
        <EveryMomentCountComponent/>
        <ReadyToJoinComponent/>
        <Footer/>

    </>)

}
export default HomeComponent;
