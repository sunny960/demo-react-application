import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import EveryMomentCountComponent from "../common/everyMomentCountComponent";
import ExerciseImage from "./components/exerciseImage";
import Description from "./components/description";
import Vision from "./components/vision";
import InspireEncourage from "./components/inspireEncourage";

const AboutComponent = () => {
    return (<>
        <HeaderComponent hideHeaderMenu={true}/>
        <InspireEncourage/>
        <Vision/>
        <Description/>
        <ExerciseImage/>
        <EveryMomentCountComponent/>
        <ReadyToJoinComponent/>
        <Footer/>
    </>)

}
export default AboutComponent