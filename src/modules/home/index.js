import React, {useEffect, useState} from "react";
import HomeComponent from "./homeComponent";
import {Loader} from "../common/loader/loader";
import {ProductService} from "../../services";
import Utility from "../../utils";

const Home = () => {
    const [showLoader, setShowLoader] = useState(true)
    const [productList, setProductList] = useState([])
    const [limit, setLimit] = useState(10)
    const [skip, setSkip] = useState(0)

    const getProductItemList = async (limit = limit, skip = skip) => {
        let [error, productList] = await Utility.parseResponse(ProductService.getAllProductItems({limit, skip}))
        if (error || !productList) {
            setShowLoader(false)
            return Utility.apiFailureToast('Unable to fetch product list')
        }
        setShowLoader(false)
        setProductList(productList)
    }

    useEffect(() => {
        getProductItemList(10, 0).then(r => console.log("result"))
    }, [])

    return (
        <>
            {showLoader ? <Loader/> : <HomeComponent productList={productList}/>}
        </>
    )

}
export default Home;