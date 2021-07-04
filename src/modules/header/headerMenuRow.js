import React from "react";
import styled, {css} from "styled-components";
import {history} from "../../utils/history";
import {Link} from "react-scroll";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ApplyForPersonalTrainer from "./applyForPersonalTrainer";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const InfoContainer = styled(Row)`
  width: 100%;
  height: 32px;
  background: #F4F4F4;
  justify-content: space-between;
  align-items: center;
  padding: 0 135px 0 135px;
`
const HeaderContainer = styled(InfoContainer)`
  background: #FFFFFF;
  height: 118px;
  ${props => props && props.backgroundColor ? css`background: ${props.backgroundColor}` : css`background: #FFFFFF`}

`

const Item = styled(Column)`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #174C6E;
  cursor: pointer;
`
const MenuContainer = styled(Row)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`
const HeaderImageContainer = styled(Column)`
  flex: 1;
`
const SessionButton = styled.button`
  background: #FF5C15;
  border-radius: 5px;
  height: 37px;
  width: 113px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #FAF9F8;
  border: 1px;
`
const ApplyTrainerButton = styled.button`
  background: #FF5C15;
  border-radius: 5px;
  height: 37px;
  width: 146px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #FAF9F8;
  border: 1px;
`

const Icon = styled.img`
  width: 11px;
  height: 11px;
`
const HeaderIcon = styled(Icon)`
  height: 78px;
  width: 164px;
  cursor: pointer;
  //padding: 19px 0 21px 0;
`
const VideoIcon = styled(Icon)`
  height: 12px;
  width: 22px;
  padding-right: 10px;
`
const HeaderMenuRow = (props) => {
    const [state, setState] = React.useState({right: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    return (<HeaderContainer backgroundColor={props.backgroundColor || ''}>
        <HeaderImageContainer>
            <HeaderIcon src="/images/pro_sport_icon.svg" onClick={() => history.push('/')}/>
        </HeaderImageContainer>
        <MenuContainer>
            <Item onClick={() => history.push('/')}>{'Home'}</Item>
            {/*<Item><Link  to="fitnessProgram" spy={true} smooth={true}>{'Programs'}</Link></Item>*/}
            <Item onClick={() => history.push('/program')}>{'Programs'}</Item>
            <Item onClick={() => history.push('/team')}>{'Trainers'}</Item>
            {/*<Item><Link  to="teamMeet" spy={true} smooth={true}>{'Trainers'}</Link></Item>*/}
            <Item><Link to="readyToJoin" spy={true} smooth={true}>{'Contact'}</Link></Item>
            <Item>
                {!props.showBtnAppyForTrainner && <SessionButton onClick={() => history.push('/session')}>
                    <VideoIcon src="/images/video_icon.svg"/>
                    <span>{'Session'}</span>
                </SessionButton>}

                {props.showBtnAppyForTrainner && <ApplyTrainerButton onClick={toggleDrawer('right', true)}>
                    <span>{'Apply for Trainer'}</span>
                </ApplyTrainerButton>}
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {state.right && <ApplyForPersonalTrainer setState={setState} state={state}/>}
                </SwipeableDrawer>
            </Item>
        </MenuContainer>
    </HeaderContainer>)

}
export default HeaderMenuRow