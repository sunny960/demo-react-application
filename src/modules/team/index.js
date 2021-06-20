import React from "react";
import TeamComponent from "./teamComponent";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <TeamComponent/>
        )
    }
}

export default Team;