import React, { useState} from "react";
import ViewProductItemList from "./components/viewProductItemList";
import OpenModal from "./components/openModal";
import Header from "../header/headerComponent";

const HomeComponent = ({state}) => {
    const [selectedProductItem, setSelectedProductItem] = useState(null)
    const [isOpen, openModal] = useState(false)

    return (<>
        <Header/>
        <ViewProductItemList productList={state.productList} openModal={openModal}
                               setSelectedProductItem={setSelectedProductItem}
                               isOpen={isOpen}/>

        {isOpen && <OpenModal selectedProductItem={selectedProductItem} isOpen={isOpen} openModal={openModal}/>}

    </>)

}
export default HomeComponent;
