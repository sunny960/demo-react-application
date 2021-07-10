import React from "react";
import HeaderComponent from "../header";
import Footer from "../footer";
import Sessions from "./components/sessions";
import ProfitNess from "./components/profitNess";
import WhoWillTrain from "./components/whoWillTrain";
import OneStepFitnessSolution from "./components/oneStepFitnessSolution";
import TextContent from "./components/textContent";
import MainComponent from "./components/mainComponent";

const PersonalTrainingPageComponent = () => {
    return (<>
        <HeaderComponent hideHeaderMenu={true}/>
        <MainComponent/>
        <TextContent/>
        <OneStepFitnessSolution/>
        <WhoWillTrain/>
        <ProfitNess/>
        <Sessions/>
        <Footer/>
    </>)

}
export default PersonalTrainingPageComponent