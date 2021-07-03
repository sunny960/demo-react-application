import React from "react";
import HeaderComponent from "../header";
import ReadyToJoinComponent from "../common/readyToJoinComponent";
import Footer from "../footer";
import RedefineFitnessComponent from "./components/redefineFitnessComponent";
import PictureView from "./components/pictureView";
import FairPriceFitYourNeed from "./components/fairPriceFitYourNeed";

const ProgramComponent = () => {
    return (<>
        <HeaderComponent/>
        <RedefineFitnessComponent/>
        <PictureView/>
        <FairPriceFitYourNeed/>
        <ReadyToJoinComponent/>
        <Footer/>

    </>)

}
export default ProgramComponent;
