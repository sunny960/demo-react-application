import React from "react";
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const list = [
    {
        image: '/images/image1.png',
    },
    {
        image: '/images/image2.png',
    },
    {
        image: '/images/image3.png',
    },
    {
        image: '/images/image4.png',
    },
]

const Item = styled(Column)`
  flex: 25;
`

const Icon = styled.img`
  //width: 25%;
  height: 1102px;
`
const PictureView = () => {
    return (<Container>
        <ItemContainer>
            {list && list.map((obj, index) =>
                    // <Item>
                    <Icon src={obj.image}/>
                // </Item>
            )}
        </ItemContainer>
    </Container>)

}
export default PictureView