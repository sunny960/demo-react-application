import React from "react";
import HomeComponent from "./homeComponent";
import {Loader} from "../common/loader/loader";
import HeaderComponent from "../header";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLoader: true};
    }

    componentDidMount() {
        setTimeout(() => this.setState({showLoader: false}), 3000)
    }


    render() {
        return (
            <>
                <HeaderComponent/>
                {this.state.showLoader && <Loader/>}
                {!this.state.showLoader && <HomeComponent/>}
            </>
        )
    }
}

export default Home;