import React from "react";
import styled from "styled-components";
import Utility from "../../../utils";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Container = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 24px 27px;
`
const ButtonContainer = styled.button`
  width: 149.76px;
  height: 38px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16.7647px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000000;

  background: ${props => props.isSelected ? '#BAE5FA' : 'rgba(255, 255, 255, 0.3)'};
  border: 1.11765px solid #57B0F1;
  box-sizing: border-box;
  backdrop-filter: blur(60.3529px);
  border-radius: 11.1765px;
`
const Text = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16.7647px;
  line-height: 20px;
  color: #000000;

`

const ViewTagList = ({tagList, selectedTag, updateSelectedTag}) => {
    return (<Container>
        <Text>{'Tags:'}</Text>
        <ButtonContainer isSelected={selectedTag === 'Favourites'}
                         onClick={() => updateSelectedTag('Favourites')}>{'Favourites'}</ButtonContainer>
        {tagList?.length>0 && tagList.map((tag, index) => <ButtonContainer
            isSelected={selectedTag === tag} key={index}
            onClick={() => updateSelectedTag(tag)}>{Utility.capitalizeFirstLetterOfEveryWord(tag)}</ButtonContainer>
        )}

    </Container>)
}
export default ViewTagList