import React from "react";
import HomeComponent from "./homeComponent";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <HomeComponent/>
        )
    }
}

export default Home;