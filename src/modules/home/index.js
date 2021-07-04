import React from "react";
import HomeComponent from "./homeComponent";
import {Loader} from "../common/loader/loader";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            // <Loader/>
            <HomeComponent/>
        )
    }
}

export default Home;