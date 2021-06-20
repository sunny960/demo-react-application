import React from "react";
import FranchiseComponent from "./franchiseComponent";

class Franchise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<FranchiseComponent/>)
    }

}

export default Franchise