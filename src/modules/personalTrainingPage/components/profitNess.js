import React from "react";
import styled from "styled-components";


const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 110px 0 133px 0;
`
const RowContainer = styled(Row)`
  gap: 71px;
  justify-content: space-between;
  align-items: flex-start;
`
const Icon = styled.img`
  width: 100%;
  max-width: 687px;
  height: 100%;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 112%;
  /* identical to box height, or 72px */

  letter-spacing: -0.05em;
  text-transform: uppercase;

  color: #174C6E;
  max-width: 678px;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */


  color: #174C6E;
  max-width: 421px;
  padding-top: 42px;
`
const TrainWithUsBtn = styled.button`
  width: 185px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
  margin-top: 130px;
`
const ProfitNess = () => {
    return (<Container>
        <RowContainer>
            <Column>
                <Title>{'ProFitness'}</Title>
                <Description>{'Train with experienced and certified instructors to achieve your fitness goals. Our training experts guide you every step of the way and ensure your get the results you desired in no time. We believe in taking fitness to the next level. We provide customised fitness programs for all our members, keeping three fundamental pillars in mind - Movement, Nutrition, and Active Regeneration.'}</Description>
                <Description>{'ProSport fitness centres have an in-house team of instructors who have been in the industry for a decade, training athletes, celebrities, kids, and more. We are not your average centre. We have the latest equipment, use effective techniques, and prioritise your overall wellness, all while maintaining high standards of safety, cleanliness, and health.'}</Description>
            </Column>
            <Icon src={'/images/profit_ness.png'}/>
        </RowContainer>
        <TrainWithUsBtn>{'Train With Us'}</TrainWithUsBtn>

    </Container>)

}
export default ProfitNess