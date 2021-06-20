import React from "react";
import styled, {css} from "styled-components";

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
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  max-height: 955px;
  ${props => props.index % 2 === 0 ? css`flex-direction: row` : css`flex-direction: row-reverse`}

`
const LeftContainer = styled(Column)`
  padding-top: 270px;
  width: 100%;
  height: 100%;
  max-width: 714px;
`
const RightContainer = styled(Column)`
  width: 100%;
  height: 100%;
  max-width: 727px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 112%;
  /* identical to box height, or 81px */
  text-align: center;
  text-transform: uppercase;
  color: #CACACA;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 112%;
  /* identical to box height, or 47px */
  color: #2F6C94;
  padding: 0 0 33px 0;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 127%;
  /* or 23px */

  letter-spacing: -0.02em;
  color: #2F6C94;
  width: 100%;
  max-width: 414px;
  padding: 0 0 33px 0;
`

const SocialIconContainer = styled(Row)`
  gap: 20px;
  width: 100%;
  max-width: 414px;
`
const SocialIcon = styled.img`
  max-width: 25px;
  height: 24px;
`
const ContentContainer = styled(Column)`
  background: url("/images/team_bg_image.svg");
  height: 565px;
  max-height: 688px;
  align-items: center;
`
const list = [
    {
        image: '/images/nilesh.jpg',
        name: 'Nilesh Panvalkar',
        description: 'With more than 12 years of extensive experience in the fitness industry, Nilesh has the expertise to ensure you move better, perform better, and most importantly, feel better. He specialises in strength and functional training.',
        certificateInfo: 'Certification -  K11 Fitness Academy',
        experienceInfo: 'Experience - 12 years.',
    },
    {
        image: '',
        name: 'Prasad Ganesh Dabholkar',
        description: 'Prasad is an expert in strength training and functional training. He can design custom fitness programs, prioritising your requirements and skills. Whatever your goal may be, he will make sure you achieve it in record time.',
        certificateInfo: 'Certification -  K11 Fitness Academy, American College of Sports Medicine (ACSM), Kettlebell Trainer from EKFA Level 1, Level 2 Foam Roller Trainer',
        experienceInfo: 'Experience - 10 years.',
    },
    {
        image: '',
        name: 'Haresh Parab',
        description: 'Passionate about fitness, coaching, and teaching, Haresh is always focused to help his clients reach their individual goals without a hassle. He believes that with the proper knowledge, discipline, encouragement, and a personalised program you can live a happy and healthy life.',
        certificateInfo: 'Certification -  ACSM Certified Personal Trainer AED/CPR/First Aid, Group Fitness Instructor- Boot camp, GGFI Certified personal trainer, ACSM Certified marathon trainer.',
        experienceInfo: 'Experience - 11 years.',
    },
    {
        image: '/images/ravi_roy.jpg',
        name: 'Ravi Roy',
        description: 'Ravi is a fitness enthusiast who specialises in HIIT and strength training. Through his training programs, he aims to help his clients enhance both aerobic and anaerobic fitness, burn more calories, and improve overall strength and endurance.',
        certificateInfo: 'Certification -  Personal trainer from K11, Cross fit level 1, black roll certified from the American College of Sports Medicine (ACSM).',
        experienceInfo: 'Experience - 10 years.',
    },
    {
        image: '/images/amit_nalwade.jpg',
        name: 'Amit Nalawde',
        description: 'Amit is a professional MMA specialist who has competed in the national event 7 times. He motivates his clients to push their limits while embracing all that their body can do. He helps his clients perfect their technique and form to get the most power out of every punch. Additionally, he also has 1 year of experience in sports rehab training.',
        certificateInfo: 'Certification -  American College of Sports Medicine (ACSM) and MMA level 1&2.',
        experienceInfo: 'Experience - 5 years.',
    },
    {
        image: '/images/darpan_image.jpg',
        name: 'Darpan Panchal',
        description: 'Darpan PanchalDarpan Panchal is a sucker for those who want to get rid of their unhealthy habits and live healthier lives. He motivates his clients with integrated fitness programs that fuel a healthy lifestyle and helps them achieve their goals.',
        certificateInfo: 'Certification -  American College of Sports Medicine (ACSM)',
        experienceInfo: 'Experience - 3+ years',
    }]

const Details = (props) => {

    return (<Container index={props.index + 1}>
        <LeftContainer>
            <ContentContainer>
                <Title>{props?.userObj?.name || ''}</Title>
                <Description>{props?.userObj?.description || ''}</Description>
                <Description>{props?.userObj?.certificateInfo || ''}</Description>
                <Description>{props?.userObj?.experienceInfo || ''}</Description>
                <SocialIconContainer>
                    <SocialIcon src={'/images/twiiter_icon.jpg'}/>
                    <SocialIcon src={'/images/team_facebook_icon.jpg'}/>
                    <SocialIcon src={'/images/team_instagram_icon.jpg'}/>
                </SocialIconContainer>
            </ContentContainer>
        </LeftContainer>
        <RightContainer>
            {/*<Icon src={'/images/darpan_panchal.svg'}/>*/}
            {props?.userObj?.image ? <Icon src={props?.userObj?.image || ''}/> : 'MISSING'}
        </RightContainer>

    </Container>)

}

const TeamMemberDescription = () => {
    return (<>
        {list && list.map((userObj, index) => <Details userObj={userObj} index={index}/>)}
    </>)

}
export default TeamMemberDescription
