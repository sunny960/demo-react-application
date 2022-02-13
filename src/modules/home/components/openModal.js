import React, {useState} from "react";
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
  padding: 10px 57px;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 250px;
`

const TextContainer = styled(Column)`
  margin-top: 10px;
`
const Text = styled.span`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  align-items: center;
  color: #005188;
  max-width: 428px;
  padding: 15px 0;
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
const PriceText = styled.span`
  font-family: Montserrat;
  font-size: 20px;
  line-height: 22px;
  align-items: center;
  color: #000000;
  text-decoration: ${({discount}) => discount ? 'line-through' : 'none'};
`

const ButtonContainer = styled.button`
  width: 112px;
  height: 34px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  background: #005188;
  color: #FFFFFF;

  border: 1px solid #005188;
  box-sizing: border-box;
  border-radius: 9px;
`
const CloseIcon = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
  position: absolute;
  right: -40px;
`

const Wrapper = styled(Row)`
  gap: 30px;
  align-items: center;
`
const ImageWrapper = styled(Column)`
  width: 300px;
`
const Input = styled.input`
  width: 225px;
  font-size: 12px;
  color: #282d32;
  border: 1px solid #005188;
  box-sizing: border-box;
  border-radius: 9px;
  height: 34px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 10px;

`
const ApplyBtn = styled(ButtonContainer)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
const DiscountWrapper = styled(Row)`
  padding: 15px 0;
  width: 100%;
  justify-content: flex-end;
`
const BtnWrapper = styled(Row)`
  padding: 15px 0;
  width: 100%;
  justify-content: flex-end;
`
const OpenModal = ({isOpen, openModal, selectedProductItem}) => {
    const [discountCode, setDiscountCode] = useState('')
    const [discountedPrice, setDiscountedPrice] = useState(0)

    function inputFieldHandler(event) {
        setDiscountCode(event.target.value)
        setDiscountedPrice(0)
    }

    function applyBtnHandler() {
        if (!discountCode)
            return
        setDiscountedPrice(parseFloat((selectedProductItem.price * 95) / 100))
    }

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
                    <Wrapper>
                        <ImageWrapper>
                            <Image src={selectedProductItem.image}/>
                        </ImageWrapper>
                        <Column>
                            <Text>{selectedProductItem?.title || ''}</Text>
                            <PriceText discount={discountedPrice}>{`$${selectedProductItem.price || '0'}`}</PriceText>
                            {discountedPrice > 0 && <PriceText>{`$${discountedPrice || '0'}`}</PriceText>}

                            <DiscountWrapper>
                                <Input name={'discountCode'} placeholder={'Enter discount code'} value={discountCode}
                                       onChange={inputFieldHandler}/>
                                <ApplyBtn onClick={applyBtnHandler}>{'Apply'}</ApplyBtn>
                            </DiscountWrapper>
                            <BtnWrapper>
                                <ButtonContainer
                                    onClick={() => Utility.showUnderDevelopment()}>{'Buy Now'}</ButtonContainer>
                            </BtnWrapper>
                        </Column>

                    </Wrapper>

                    <TextContainer>
                        <Description>{selectedProductItem?.description || ''}</Description>
                    </TextContainer>
                </Container>
            </Modal>

        </div>
    )
}
export default OpenModal