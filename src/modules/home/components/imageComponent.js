import React from "react";
import styled from 'styled-components'
import UnderDevelopment from "../../common/underDevelopment";

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
  //background: #174C6E;
  background: #FFFFFF;
  height: 400px;
  align-items: center;
`
const ImageContainer = styled(Row)`
  position: relative;
  width: 100%;
  height: 815px;
  background: url('/images/bg_advertise_color.jpg');
  //mix-blend-mode: hue;
`
const AdvertiseImage = styled(Column)`
  top: 36px;
  position: absolute;
  width: 100%;
  max-width: 972px;
  height: 779px;
  background: url('/images/fitness_advertisement.svg');
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
`
const ImageComponent = () => {
    return (
        <Container>
            <UnderDevelopment/>
            {/*<ImageContainer>*/}
            {/*        <AdvertiseImage src="/images/bg_advertise_color.jpg"/>*/}
            {/*</ImageContainer>*/}
        </Container>)
}
export default ImageComponent
