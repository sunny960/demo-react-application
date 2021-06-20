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
const Container = styled(Column)`
  width: 100%;
  height: 1038px;
  background: url("/demo-react-application/images/about_image.jpg");
  align-items: center;
  justify-content: center;
`
const ExerciseImage =()=><Container/>


export default ExerciseImage