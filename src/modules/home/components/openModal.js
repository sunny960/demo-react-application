import React from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Utility from "../../../utils";


const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  position: absolute;
  max-width: 720px;
  min-width: 400px;
  width: 100%;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
  background-color: #fff;
  outline: none;
  top: 40%;
  left: 43%;
  transform: translate(-43%, -40%);
`

const Player = styled.iframe`
  display: block;
  width: 100%;
  height: 400px;
`

const TextContainer = styled(Column)`
  padding: 10px 57px;

`
const Text = styled.span`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  align-items: center;
  color: #005188;
  max-width: 428px;
`
const Description = styled.span`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 15px;
  align-items: center;
  color: #000000;
  padding-bottom: 12px;
  max-width: 486px;
`
const TagWrapper = styled(Row)`
  flex-wrap: wrap;
  padding: 10px 0;
  grid-gap: 24px 27px;
`

const ButtonContainer = styled.button`
  width: 112px;
  height: 34px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #005188;

  border: 1px solid #A6A6A6;
  box-sizing: border-box;
  border-radius: 9px;
  background: transparent
`
const CloseIcon = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
  position: absolute;
  right: -40px;
`
const OpenModal = ({isOpen, openModal, selectedProductItem}) => {

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={() => openModal(!isOpen)}
            >
                <Container>
                    <CloseIcon src={'/images/close_icon.png'} onClick={() => openModal(!isOpen)}/>
                    <Player src={selectedProductItem.videolink} allow="autoplay; fullscreen;"
                            frameBorder="0"/>
                    <TextContainer>
                        <Text>{selectedProductItem?.title || ''}</Text>
                        <TagWrapper>
                            {selectedProductItem.tags?.length && selectedProductItem.tags.map((tag, index) =>
                                <ButtonContainer
                                    key={index}>{Utility.capitalizeFirstLetterOfEveryWord(tag)}</ButtonContainer>
                            )}
                        </TagWrapper>
                        <Description>{selectedProductItem?.description || ''}</Description>
                    </TextContainer>
                </Container>
            </Modal>

        </div>
    )
}
export default OpenModal