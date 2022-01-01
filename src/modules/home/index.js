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
            tagList: [],
            productList: [],
            filteredProductList: [],
            indexedProductList: {},
        };
    }

    componentDidMount() {
        this.getProductItemList()
        setTimeout(() => this.setState({showLoader: false}), 3000)
    }

    getProductItemList = async () => {
        let [error, productList] = await Utility.parseResponse(ProductService.getAllProductItems())
        console.log("error===", error)
        console.log("productList===", productList)
        if (error) {
            this.setState({showLoader: true})
            return Utility.apiFailureToast('Unable to fetch product list')
        }
        this.parseProductList(productList)
    }
    parseProductList = (productList = []) => {
        let tagList = []
        productList.forEach((product) => {
            if (product?.tags?.length > 0)
                tagList = [...tagList, ...product?.tags]
        })
        tagList = new Set(tagList)
        let indexedProductList = {}
        tagList.forEach((tag) => {
            indexedProductList[tag] = productList.filter((product) => product.tags.indexOf(tag) !== -1)
        })
        this.setState({tagList : Array.from(tagList), productList, indexedProductList, showLoader: false});
    }

    render() {
        return (
            <>
                {this.state.showLoader && <Loader/>}
                {!this.state.showLoader && <HomeComponent state={this.state}/>}
            </>
        )
    }
}

export default Home;