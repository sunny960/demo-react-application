import React from "react";
import styled from "styled-components";
import HeaderMenuRow from "../../header/headerMenuRow";

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
  height: 648px;
  background: url("/demo-react-application/images/inspire_incourage_bg.jpg");
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  line-height: 103%;
  /* or 67px */

  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  max-width: 470px;
  padding: 161px 0 127px 0;
`
const ContentContainer = styled(Row)`
  align-items: center;
  justify-content: center;
`
const Icon = styled.img`
  width: 730px;
  height: 436px;
  margin-top: 115px;
`
const InspireEncourage = () => {
    return (<Container>
        <HeaderMenuRow backgroundColor={'transparent'}/>
        <ContentContainer>
            <Column>
                <Title>{'EMPOWER. INSPIRE. ENCOURAGE. PROSPORT.'}</Title>
            </Column>
            <Column>
                <Icon src={'/demo-react-application/images/user_picture.svg'}/>
            </Column>
        </ContentContainer>
    </Container>)

}
export default InspireEncourage