import React, {useState} from "react";
import styled from 'styled-components'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Icon = styled.img`
  max-width: 100%;
  height: 100%;
`
const ButtonIcon = styled.img`
  max-width: 130px;
  height: 97px;
  position: absolute;
  cursor: pointer;
`
const Player = styled.iframe`
  display: block;
  min-width: 560px;
  min-height: 350px;
`
const YouTube = () => {
    const [open, setOpen] = useState(false)

    return (<Container>
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent style={{width: '560px', position: "relative", top: "-10%", padding: "0px"}}>
                <Player src={'https://www.youtube-nocookie.com/embed/JcRKdEP94jM?autoplay=1&rel=0&modestbranding=1'}
                        allow="autoplay; fullscreen; picture-in-picture" frameBorder="0"/>
            </DialogContent>
        </Dialog>
        <Icon src={'/images/residential_youtube.png'}/>
        <ButtonIcon src={'/images/residential_youtube_btn.png'} onClick={() => setOpen(true)}/>
    </Container>)

}
export default YouTube