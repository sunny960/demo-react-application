import React, {useState} from "react";
import styled from 'styled-components'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

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
  background: #EAE4D8;
  padding: 124px 0 173px 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  padding-top: 126px;
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
  padding-top: 25px;
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

  width: 169px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  margin-top: 47px;
  margin-bottom: 10px;

`
const Icon = styled.img`
  height: 666px;
  max-width: 717px;
  width: 100%;
  cursor: pointer;
`

const Player = styled.iframe`
  display: block;
  min-width: 560px;
  min-height: 350px;
`
const RedefineFitnessComponent = () => {
    const [open, setOpen] = useState(false)

    return (<Container>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent style={{width: '560px', position: "relative", top: "-10%", padding: "0px"}}>
                    <Player src={'https://www.youtube-nocookie.com/embed/JcRKdEP94jM?autoplay=1&rel=0&modestbranding=1'}
                            allow="autoplay; fullscreen; picture-in-picture" frameBorder="0"/>
                </DialogContent>
            </Dialog>
            <Column>
                <RedefineText>{'Fitness Redefined'}</RedefineText>
                <DescriptionText>{'We believe in working with you to unlock your highest fitness potential and become the best version of yourself. With our thoughtfully curated training sessions.'}</DescriptionText>
                <BecomeMemberBtn>{'get started'}</BecomeMemberBtn>
            </Column>
            <Column>
                <Icon src={'/images/fitnessRedefine.png'} onClick={() => setOpen(true)}/>

            </Column>

        </Container>
    )
}
export default RedefineFitnessComponent