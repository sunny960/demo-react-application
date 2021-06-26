import React from "react";
import styled from 'styled-components'
import {history} from "../../../utils/history";

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
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const list = [
    {
        image: '/demo-react-application/images/meet_with_1.svg',
    },
    {
        image: '/demo-react-application/images/meet_with_2.svg',
    },
    {
        image: '/demo-react-application/images/meet_with_3.svg',
    },
    {
        image: '/demo-react-application/images/meet_with_4.jpg',
    },
]

const Item = styled(Column)`
  flex: 25;
`
const Icon = styled.img`
  //width: 25%;
  height: 596px;
`
const FreeTrialButton = styled.button`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;

  width: 169px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  margin: 114px 0 115px 0;
`
const BtnContainer = styled(Row)`
  justify-content: center;
  align-items: center;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 88.5%;
  /* identical to box height, or 57px */

  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;

  color: #174C6E;

  padding: 145px 0 150px 0;
`
const MeetTheTeamComponent = () => {
    return (<Container id={'teamMeet'}>
        <Title>{'Meet the Team'}</Title>
        <ItemContainer>
            {list && list.map((obj, index) =>
                    // <Item>
                    <Icon src={obj.image}/>
                // </Item>
            )}
        </ItemContainer>
        <BtnContainer>
            <FreeTrialButton onClick={() => history.push('/team')}>{'Read More'}</FreeTrialButton>
        </BtnContainer>
    </Container>)

}
export default MeetTheTeamComponent