import React from "react";
import styled from "styled-components";
import ViewTagList from "./viewTagList";


const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled(Column)`
  position: relative;
`
const ContentWrapper = styled(Column)`
  position: absolute;
  top: 25%;
  left: 15%;
`
const TagWrapper = styled(Column)`
  position: absolute;
  bottom: 15%;
  z-index: 100;
`
const HeaderWrapper = styled(Row)`
  justify-content: space-between;
  padding: 0 34px 0 31px;
  position: absolute;
  width: 100%;
  z-index: 100;
`
const HeaderRightWrapper = styled(Row)`
  margin-top: 20px;

`
const BgImage = styled.img`
  width: 100%;
  height: 650px;
`
const LeftSliderIcon = styled.a`
  position: absolute;
  top: 0;
  bottom: 30%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
`
const RightSliderIcon = styled(LeftSliderIcon)`
  right: 0;
`
const LogoIcon = styled.img`
  height: 34px;
  margin-top: 30px;
`
const BellIcon = styled.img`
  width: 38px;
`
const ProfileIcon = styled.img`
  width: 100%;
`
const DownArrowIcon = styled.img`
  width: 9px;
`
const Text = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 117.8%;
  max-width: 480px;
  color: #FFFFFF;
`
const Button = styled.button`
  width: 182px;
  height: 52px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  background: rgba(6, 139, 236, 0.6);
  backdrop-filter: blur(54px);
  border-radius: 10px;
  border: none;

  margin-top: 42px;
`
const CarouselComponent = ({tagList, selectedTag, updateSelectedTag}) => {
    return (<Wrapper>
        <div id="demo" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <BgImage src={'/images/carousel_img.png'} alt="Los Angeles"/>
                    <TextComponent/>
                </div>
                <div className="carousel-item">
                    <BgImage src={'/images/carousel_img.png'} alt="Chicago"/>
                    <TextComponent/>
                </div>
                <div className="carousel-item">
                    <BgImage src={'/images/carousel_img.png'} alt="New York"/>
                    <TextComponent/>
                </div>
            </div>
            <LeftSliderIcon href="#demo" data-slide="prev">
                <img src={'/images/left_arrow.svg'} alt={'left_arrow'}/>
            </LeftSliderIcon>
            <RightSliderIcon href="#demo" data-slide="next">
                <img src={'/images/right_arrow.svg'} alt={'right_arrow'}/>
            </RightSliderIcon>
        </div>
        <HeaderWrapper>
            <LogoIcon src={'/images/logo.png'}/>
            <HeaderRightWrapper>
                <BellIcon src={'/images/bell_icon.svg'}/>
                <ProfileIcon src={'/images/profile.svg'}/>
                <DownArrowIcon src={'/images/down_arrow.svg'}/>
            </HeaderRightWrapper>
        </HeaderWrapper>
        <TagWrapper>
            <ViewTagList tagList={tagList} selectedTag={selectedTag} updateSelectedTag={updateSelectedTag}/>
        </TagWrapper>
    </Wrapper>)
}

const TextComponent = () => {
    return (<ContentWrapper>
        <Text>{'Diagnosis & Monitoring of airway diseases in the Era of Social Distancing'}</Text>
        <Button>{'WATCH NOW'}</Button>
    </ContentWrapper>)
}
export default CarouselComponent;