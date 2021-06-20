import React from "react";
import styled from "styled-components";

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
const Text = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 155.8%;
  /* or 47px */

  text-align: center;
  color: #174C6E;
  max-width: 891px;
  padding: 154px 0 167px 0;

`
const Description = () => {
    return (<Container>
        <Text>{'Built on the foundation to provide unequalled and elevated fitness experience, the gifted cricketer and sportsman Zaheer Khan started ProSport to help people live healthier and stronger. We are not your ordinary fitness centre. With our extensive industry knowledge and decades of Training, Physiotherapy & Injury Management and Nutritional Counseling experience, we understand that there is no "one size fits all" fitness approach. With this as a priority, we design custom training programs to meet your every unique fitness goal.'}</Text>

    </Container>)

}
export default Description