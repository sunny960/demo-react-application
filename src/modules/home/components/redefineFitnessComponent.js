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
const Container = styled(Row)`
  width: 100%;
  background: #E5E5E5;
  padding: 148px 0 126px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const FirstRowContainer = styled(Row)`
  gap: 25px;
`
const FirstRow1stBox = styled(Column)`
  width: 245px;
  height: 213px;
  background: #FFFFFF;
`
const FirstRow2ndBox = styled(Column)`
  width: 222px;
  height: 191px;
  background: #FFFFFF;
`
const SecondRowBox = styled(Column)`
  width: 222px;
  height: 191px;
  background: #FFFFFF;
`
const FirstRow1stColorText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 49px;
  /* identical to box height, or 49px */
  padding: 40px 0 13px 33px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #FF5C15;
`
const FirstRow2stColorText = styled(FirstRow1stColorText)`
  color: #FFCA08;
  padding: 40px 0 13px 25px;

`
const SecondRow1stColorText = styled(FirstRow1stColorText)`
  color: #FFCA08;
  padding: 34px 0 22px 31px;
`
const SecondRow2stColorText = styled(FirstRow1stColorText)`
  color: #FFCA08;
  padding: 34px 0 22px 40px;
`


const FirstRow1stText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  color: #327AA3;
  padding-left: 33px;
`
const FirstRow2ndText = styled(FirstRow1stText)`
  padding-left: 20px;
`
const SecondRow1stText = styled(FirstRow1stText)`
  padding-left: 31px;
`
const SecondRow2ndText = styled(FirstRow1stText)`
  padding-left: 39px;
`
const SecondRowContainer = styled(Row)`
  padding-top: 24px;
  gap: 48px;
`
const RedefineText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 66px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  max-width: 457px;
  padding-top: 40px;
`
const DescriptionText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  /* or 25px */
  color: #174C6E;
  max-width: 484px;
  padding-top: 31px;
`
const BecomeMemberBtn = styled.button`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;

  width: 227px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  margin-top: 51px;
  margin-bottom: 10px;

`
const RedefineFitnessComponent = () => {
    return (<Container>
            <Column>
                <RedefineText>{'Redefining Fitness'}</RedefineText>
                <DescriptionText>{'Discover the newest and ultimate fitness techniques customised to meet your specific needs. We believe in empowering our clients to reach their fitness goals effortlessly.'}</DescriptionText>
                <BecomeMemberBtn>{'Become A Member'}</BecomeMemberBtn>
            </Column>
            <Column>
                <FirstRowContainer>
                    <FirstRow1stBox>
                        <FirstRow1stColorText>{'50+'}</FirstRow1stColorText>
                        <FirstRow1stText>{'Building Management'}</FirstRow1stText>
                    </FirstRow1stBox>
                    <FirstRow2ndBox>
                        <FirstRow2stColorText>{'200+'}</FirstRow2stColorText>
                        <FirstRow2ndText>{'Personal Training Program'}</FirstRow2ndText>
                    </FirstRow2ndBox>
                </FirstRowContainer>
                <SecondRowContainer>
                    <SecondRowBox>
                        <SecondRow1stColorText>{'50+'}</SecondRow1stColorText>
                        <SecondRow1stText>{'Corporate Wellness'}</SecondRow1stText>
                    </SecondRowBox>
                    <SecondRowBox>
                        <SecondRow2stColorText>{'200+'}</SecondRow2stColorText>
                        <SecondRow2ndText>{'Group Fitness Program'}</SecondRow2ndText>
                    </SecondRowBox>
                </SecondRowContainer>

            </Column>

        </Container>
    )
}
export default RedefineFitnessComponent