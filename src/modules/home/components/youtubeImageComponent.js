import React, {useState} from "react";
import styled from 'styled-components'
import {history} from "../../../utils/history";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
`
const YouTubeImage = styled.img`
  height: 680px;
  width: 100%;
`
const YouTubePlayIcon = styled.img`
  position: absolute;
  width: 130px;
  height: 97px;
  top: 45%;
  left: 45%;
  cursor: pointer;
`
const AboutBtn = styled.button`
  width: 169px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  margin: 74px 0 109px 0;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`
const ImageContainer = styled(Column)`
  position: relative;
`
const Player = styled.iframe`
  display: block;
  min-width: 560px;
  min-height: 350px;
`

const YoutubeImageComponent = () => {
    const [open, setOpen] = useState(false)
    return (<Container>
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent style={{width: '560px', position: "relative", top: "-10%", padding: "0px"}}>
                <Player src={'https://www.youtube-nocookie.com/embed/JcRKdEP94jM?autoplay=1&rel=0&modestbranding=1'}
                        allow="autoplay; fullscreen; picture-in-picture" frameBorder="0"/>
            </DialogContent>
        </Dialog>
        <ImageContainer>
            <YouTubeImage src={'/images/youtube_image.svg'}/>
            <YouTubePlayIcon src={'/images/youtube_play_icon.svg'} onClick={() => setOpen(true)}/>
        </ImageContainer>
        <AboutBtn onClick={() => history.push('/about')}>{'About Us'}</AboutBtn>
    </Container>)

}
export default YoutubeImageComponent