import React from "react";
import styled from "styled-components";
import ProductItem from "./productItem";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  padding: 10px 34px 10px 34px;
`
const ProductContainer = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 24px 27px;

`
const ViewProductItemList = ({isOpen, openModal, setSelectedProductItem, title, productList}) => {
    return (<Container>
        <ProductContainer>
            {productList?.length > 0 && productList.map((product, index) => <ProductItem product={product}
                                                                                         key={index}
                                                                                         openModal={openModal}
                                                                                         isOpen={isOpen}
                                                                                         setSelectedProductItem={setSelectedProductItem}/>)}
        </ProductContainer>

    </Container>)

}

export default ViewProductItemList