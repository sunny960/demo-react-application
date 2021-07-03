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
  background: #E5E5E5;
  align-items: center;
  justify-content: center;
  padding: 208px 0 141px 0;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 112%;
  /* or 72px */

  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  max-width: 620px;
  padding-bottom: 22px;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 155.8%;
  /* or 28px */

  text-align: center;
  color: #174C6E;
  max-width: 746px;
  padding-bottom: 80px;
`
const BoxContainer = styled(Column)`
  max-width: 1170px;
  background: #FFFFFF;
  border-radius: 20px;
  margin: 0 135px 39px;
`
const BoxTitle = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 110%;
  /* identical to box height, or 40px */

  text-align: center;
  letter-spacing: -0.02em;
  color: #174C6E;
  padding: 68px 0 61px 0;
`
const ContainerWrapper = styled(Row)`
  gap: 37px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`
const WhiteBox = styled(Row)`
  background: #FFFFFF;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 335px;
  height: 160px;
  margin-bottom: 55px;
`
const YellowBox = styled(Row)`
  background: #FFCB05;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 335px;
  height: 160px;
  margin-bottom: 55px;
`
const WhiteCurrency = styled(Column)`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 101.18%;
  /* or 36px */

  text-transform: capitalize;
  color: #174C6E;
  padding: 47px 19px 0 29px;
`
const YellowCurrency = styled(Column)`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 101.18%;
  /* or 36px */

  text-transform: capitalize;
  color: #FFFFFF;
  padding: 47px 19px 0 29px;
`
const Content = styled(Column)`
  padding: 41px 0;
`
const WhiteMoney = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 101.18%;
  /* identical to box height, or 49px */

  text-transform: capitalize;
  color: #174C6E;
  padding-bottom: 11px;
`
const YellowMoney = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 101.18%;
  /* identical to box height, or 49px */

  text-transform: capitalize;
  color: #FFFFFF;
  padding-bottom: 11px;
`
const WhitePlan = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 101.18%;
  /* or 18px */

  text-transform: capitalize;
  color: #174C6E;
`
const YellowPlan = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 101.18%;
  /* or 18px */

  text-transform: capitalize;
  color: #FFFFFF;
`
let list = [{
    title: 'Assisted Training (1000 per session)',
    planInformation: [{
        price: '14000',
        plan: '1 Month / Unlimited'
    }, {
        price: '33000',
        plan: '3 Month / Unlimited'
    }, {
        price: '99000',
        plan: '12 Month / Unlimited'
    }]
}, {
    title: 'Personal Training (1500 per session)',
    planInformation: [{
        price: '17000',
        plan: '1 Month / Unlimited'
    }, {
        price: '45000',
        plan: '3 Month / Unlimited'
    }, {
        price: '1,48,000',
        plan: '12 Month / Unlimited Of \n For the whole week'
    }]
}]
const Wrapper = styled(Column)`
  background: linear-gradient(0deg, #1A4C6F, #1A4C6F), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  border-radius: 20px;
  max-width: 1170px;
  align-content: center;
  justify-content: center;
  position: relative;
  margin-top: 61px;
`
const PlanRow = styled(Row)`
  padding: 113px 94px 0 70px;
  justify-content: space-between;
  align-content: center;
`
const PlanColumn = styled(Column)`

`
const PlanTitle = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 110%;
  /* identical to box height, or 40px */

  letter-spacing: -0.02em;
  color: #FAF9F8;
  padding-bottom: 4px;
`
const PlanDiscription = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 101.18%;
  /* or 18px */

  text-transform: capitalize;
  color: #FFFFFF;
  padding-bottom: 87px;
`
const FlexiImage = styled.img`
  width: 100%;
  max-width: 1170px;
  height: 625px;
`
const FooterText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 121.5%;
  /* or 29px */

  letter-spacing: 0.7em;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  padding: 141px 0 0 0;
`
const ImageContainer = styled(Row)`
  position: relative;
`
const DiscountFirst = styled(Row)`
  position: absolute;
  top: -30px;
  left: 70px; 
  background: #FFFFFF;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 61px;
  gap: 16px;
  
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`
const DiscountSecond = styled(Row)`
  position: absolute;
  top: -30px;
  right: 70px;
  background: #FFFFFF;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 61px;
  gap: 16px;
  
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`
const DiscountCol = styled(Column)`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 101.18%;
  /* or 24px */

  text-transform: capitalize;
  color: #1A4C6F;
`
const CurencyCol = styled(Column)`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 101.18%;
  /* or 36px */

  text-transform: capitalize;
  color: #174C6E;
`
const MoneyCol = styled(Column)`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 101.18%;
  /* or 36px */

  text-transform: capitalize;
  color: #1A4C6F;
`
const DiscountContainer = styled(Column)`
  background: #FF5C15;
  height: 381px;
  width: 165px;
  align-content: center;
  justify-content: center;
  
  position: absolute;
  top: -33px;
  left: 42%;
  z-index: 1000;
`
const DiscountPercentage = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 101.18%;
  /* identical to box height, or 65px */

  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
`
const DiscountSessionText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 101.18%;
  /* or 24px */
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF
`
const FlexiPlanView = () => {
    return (<Wrapper>
        <DiscountContainer>
            <DiscountPercentage>{'20%'}</DiscountPercentage>
            <DiscountSessionText>{'100 Sessions'}</DiscountSessionText>
        </DiscountContainer>
        <PlanRow>
            <PlanColumn>
                <PlanTitle>{'Flexi Plan - Assisted'}</PlanTitle>
                <PlanDiscription>{'50 Sessions = 10% discount = Rs. 45,000'}</PlanDiscription>
            </PlanColumn>
            <PlanColumn>
                <PlanTitle>{'Flexi Plan - Personal'}</PlanTitle>
                <PlanDiscription>{'50 Sessions = 10% discount = Rs. 67,500'}</PlanDiscription>
            </PlanColumn>
        </PlanRow>
        <ImageContainer>
            <FlexiImage src={'/images/flexi_plan.png'}/>
            <DiscountFirst>
                <DiscountCol>{'Discount'}</DiscountCol>
                <CurencyCol>{'₹'}</CurencyCol>
                <MoneyCol>{'80000'}</MoneyCol>
            </DiscountFirst>
            <DiscountSecond>
                <DiscountCol>{'Discount'}</DiscountCol>
                <CurencyCol>{'₹'}</CurencyCol>
                <MoneyCol>{'1,20,000'}</MoneyCol>
            </DiscountSecond>
        </ImageContainer>
    </Wrapper>)
}

const FairPriceFitYourNeed = () => {
    return (<Container>
        <Title>{'Fair prices fit your needs'}</Title>
        <Description>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}</Description>
        {list.map((obj, index) =>
            <BoxContainer key={index}>
                <BoxTitle>{obj.title}</BoxTitle>
                <ContainerWrapper>
                    {obj && obj.planInformation.map((planObj, innerIndex) =>
                        <>{(innerIndex + 1) % 2 !== 0 && <WhiteBox key={innerIndex}>
                            <WhiteCurrency>{'₹'}</WhiteCurrency>
                            <Content>
                                <WhiteMoney>{planObj.price}</WhiteMoney>
                                <WhitePlan>{planObj.plan}</WhitePlan>
                            </Content>
                        </WhiteBox>
                        }
                            {(innerIndex + 1) % 2 === 0 && <YellowBox>
                                <YellowCurrency>{'₹'}</YellowCurrency>
                                <Content>
                                    <YellowMoney>{planObj.price}</YellowMoney>
                                    <YellowPlan>{planObj.plan}</YellowPlan>
                                </Content>
                            </YellowBox>}
                        </>
                    )}
                </ContainerWrapper>

            </BoxContainer>
        )}
        <FlexiPlanView/>
        <FooterText>{'All our prices are exclusive of Taxes'}</FooterText>

    </Container>)

}
export default FairPriceFitYourNeed