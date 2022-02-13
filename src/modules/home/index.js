import React from "react";
import HomeComponent from "./homeComponent";
import {Loader} from "../common/loader/loader";
import {ProductService} from "../../services";
import Utility from "../../utils";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,
            productList: [],
            limit:10,
            skip:0
        };
    }

    componentDidMount() {
        this.getProductItemList(10,0)
    }

    getProductItemList = async (limit=this.state.limit,skip=this.state.skip) => {
        let [error, productList] = await Utility.parseResponse(ProductService.getAllProductItems({limit,skip}))
        if (error || !productList) {
            this.setState({showLoader: false})
            return Utility.apiFailureToast('Unable to fetch product list')
        }
        this.setState({productList, showLoader: false})
    }

    render() {
        return (
            <>
                {this.state.showLoader? <Loader/>: <HomeComponent state={this.state}/>}
            </>
        )
    }
}

export default Home;