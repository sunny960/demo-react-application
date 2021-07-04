import React from "react";
import styled from "styled-components"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Utility from "../../utils";


const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const ContentContainer = styled(Column)`
  width: 693px;
  max-width: 693px;
  background: #FFFFFF;
  padding: 0 75px
`
const Title = styled.span`
  max-width: 383px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 103%;
  /* or 37px */

  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  padding: 82px 0 0 0;
`
const Description = styled.span`
  max-width: 542px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 171.68%;
  /* identical to box height, or 31px */
  color: #83949F;
  padding: 0 0 54px 0;
`
const Label = styled.span`
  max-width: 542px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 121.5%;
  /* identical to box height, or 22px */
  letter-spacing: -0.02em;
  color: #174C6E;
`

const InputField = styled.input`
  width: 100%;
  max-width: 542px;
  border: 1px solid #174C6E;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  padding: 11px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 121.5%;
  margin-bottom: 34px;
  /* identical to box height, or 22px */

  letter-spacing: -0.02em;
  color: #174C6E;

  ::-webkit-input-placeholder {
    color: #174C6E;
  }

  &.hasFocus:focus,
  &:active {
    border-color: #174C6E;
  }

`
const ButtonContainer = styled(Row)`
  width: 100%;
  max-width: 542px;
  gap: 20px;
  padding: 20px 0 70px 0;
`
const CancelBtn = styled.button`
  background: #C4C4C4;
  border-radius: 5px;
  width: 169px;
  height: 49px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 1px;
`
const RegisterBtn = styled.button`
  background: #FF5C15;
  border-radius: 5px;
  width: 169px;
  height: 49px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 1px;
`
const CityAndGenderContainer = styled(Row)`
  width: 100%;
  max-width: 542px;
  gap: 36px;
  justify-content: space-between;
`
const CityContainer = styled(Column)`
  width: 256px;
  margin-bottom: 34px;
`
const GenderContainer = styled(Column)`
  width: 256px;
  margin-bottom: 34px;
`
const ApplyForPersonalTrainer = (props) => {
    const [city, setCity] = React.useState('');
    const [gender, setGender] = React.useState('');

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }
    function closeDrawer(anchor, open){
        props.setState({...props.state, [anchor]: open})
    }

    return (
        // <Row>
        <ContentContainer>
            <Title>{'Apply for Personal Trainer'}</Title>
            <Description>{'Please enter your details below and wait for our call :)'}</Description>
            <Label>{'Name'}</Label>
            <InputField type={'text'} placeholder={''}/>
            <Label>{'Email'}</Label>
            <InputField type={'text'} placeholder={''}/>
            <Label>{'Mobile'}</Label>
            <InputField type={'text'} placeholder={''}/>
            <CityAndGenderContainer>
                <CityContainer>
                    <Label>{'City'}</Label>
                    <Select
                        value={city}
                        onChange={handleCityChange}
                        displayEmpty
                        className={''}
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        <MenuItem value="">
                            <em>{''}</em>
                        </MenuItem>
                        <MenuItem value={'Haryana'}>{'Haryana'}</MenuItem>
                        <MenuItem value={'Delhi'}>{'Delhi'}</MenuItem>
                        <MenuItem value={'Uttar Pradesh'}>{'Uttar Pradesh'}</MenuItem>
                    </Select>
                </CityContainer>
                <GenderContainer>
                    <Label>{'Gender'}</Label>
                    <Select
                        value={gender}
                        onChange={handleGenderChange}
                        displayEmpty
                        className={''}
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        <MenuItem value="">
                            <em>{''}</em>
                        </MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </GenderContainer>
            </CityAndGenderContainer>
            <Label>{'Area of Expertise'}</Label>
            <InputField type={'text'} placeholder={''}/>
            <Label>{'Experience'}</Label>
            <InputField type={'text'} placeholder={''}/>
            <Label>{'Apply for this  post'}</Label>
            <InputField type={'text'} placeholder={''}/>
            <ButtonContainer>
                <CancelBtn onClick={() => closeDrawer('right', false)}>{'Cancel'}</CancelBtn>
                <RegisterBtn onClick={() => Utility.showUnderDevelopment()}>{'Register'}</RegisterBtn>
            </ButtonContainer>

        </ContentContainer>
// </Row>
    )

}
export default ApplyForPersonalTrainer