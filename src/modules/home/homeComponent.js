import React, {useEffect, useState} from "react";
import ViewProductItemList from "./components/viewProductItemList";
import Utility from "../../utils";
import OpenModal from "./components/openModal";
import CarouselComponent from "./components/carouselCompoent";
import {useSelector} from "react-redux";

const HomeComponent = ({state}) => {
    const [selectedTag, setSelectedTag] = useState('')
    const [filteredList, setFilteredList] = useState([])
    const [selectedProductItem, setSelectedProductItem] = useState(null)
    const [isOpen, openModal] = useState(false)
    const favouriteVideoList = useSelector((state)=>state.video.favouriteVideoList)
    useEffect(() => {
        if (favouriteVideoList && favouriteVideoList.length > 0) {
            setSelectedTag('Favourites')
            setFilteredList(favouriteVideoList)
        }
    }, [favouriteVideoList])

    function updateSelectedTag(tag = '') {
        setSelectedTag(tag)
        if (tag === 'Favourites') {
            setFilteredList(favouriteVideoList)
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
