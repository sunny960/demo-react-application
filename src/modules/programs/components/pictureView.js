import React from "react";
import styled from 'styled-components'

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

const Icon = styled.img`
  max-width: 100%;
  height: 1102px;
`
const PictureView = () => {
    return (<Container>
        <Icon src={'/images/programs_image_view.png'}/>
    </Container>)

}
export default PictureView