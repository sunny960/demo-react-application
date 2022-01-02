import React, {useEffect, useState} from "react";
import ViewProductItemList from "./components/viewProductItemList";
import Utility from "../../utils";
import OpenModal from "./components/openModal";
import sessionManager from "../../managers/sessionManager";
import {sessionConstants} from "../../constants";
import CarouselComponent from "./components/carouselCompoent";

const HomeComponent = ({state}) => {
    const [selectedTag, setSelectedTag] = useState('')
    const [filteredList, setFilteredList] = useState([])
    const [selectedProductItem, setSelectedProductItem] = useState(null)
    const [isOpen, openModal] = useState(false)
    useEffect(() => {
        let list = sessionManager.getDataFromLocalStorage(sessionConstants.FAVOURITE_LIST) || []
        if (list && list.length > 0) {
            setSelectedTag('Favourites')
            setFilteredList(list)
        }
    }, [])

    function updateSelectedTag(tag = '') {
        setSelectedTag(tag)
        if (tag === 'Favourites') {
            let list = sessionManager.getDataFromLocalStorage(sessionConstants.FAVOURITE_LIST) || []
            setFilteredList(list)
        } else
            setFilteredList(state.indexedProductList[tag]);

    }

    return (<>
        <CarouselComponent tagList={state.tagList} selectedTag={selectedTag} updateSelectedTag={updateSelectedTag}/>
        {filteredList?.length > 0 &&
        <ViewProductItemList productList={filteredList}
                             title={`Videos on ${Utility.capitalizeFirstLetterOfEveryWord(selectedTag)}`}
                             openModal={openModal}
                             setSelectedProductItem={setSelectedProductItem}
                             isOpen={isOpen}
        />
        } <ViewProductItemList productList={state.productList} openModal={openModal}
                               setSelectedProductItem={setSelectedProductItem}
                               isOpen={isOpen}/>

        {isOpen && <OpenModal selectedProductItem={selectedProductItem} isOpen={isOpen} openModal={openModal}/>}

    </>)

}
export default HomeComponent;
