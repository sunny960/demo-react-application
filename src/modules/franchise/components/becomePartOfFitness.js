import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Row)`
  width: 100%;
  background: url('/demo-react-application/images/become_part_of_fitness_bg_image.jpg');
  align-items: center;
  justify-content: center;
  max-height: 805px;
  padding-top: 34px;
`
const LeftContainer = styled(Column)`
`
const RightContainer = styled(Column)`
`
const FirstRowContainer = styled(Row)`
  gap: 10px;
  padding-bottom: 11px;
`
const SecondRowContainer = styled(Row)`
  gap: 10px;
  padding-bottom: 92px;
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
  max-width: 500px;
  padding: 191px 0 283px 0;
`
const Icon1 =styled.img`
  width: 284px;
  height: 314px;
`
const Icon2 =styled.img`
  width: 270px;
  height: 252px;
  margin-top: 60px;
`
const Icon3 =styled.img`
  width: 316px;
  height: 354px;
`
const Icon4 =styled.img`
  width: 224px;
  height: 227px;
`
//TODO need to work here
const BecomePartOfFitness = () => {
    return (<Container>
        <LeftContainer>
            <Title>{'Become a Part of the ProSport Fitness Movement'}</Title>
        </LeftContainer>
        <RightContainer>
            <FirstRowContainer>
                <Column>
                    <Icon1 src={'/demo-react-application/images/fitness_1.jpg'}/>
                </Column>
                <Column>
                    <Icon2 src={'/demo-react-application/images/fitness_2.jpg'}/>
                </Column> </FirstRowContainer>
            <SecondRowContainer>
                <Column>
                    <Icon3 src={'/demo-react-application/images/fitness_3.jpg'}/>
                </Column>
                <Column>
                    <Icon4 src={'/demo-react-application/images/fitness_4.jpg'}/>
                </Column>
            </SecondRowContainer>
        </RightContainer>

    </Container>)

}
export default BecomePartOfFitness