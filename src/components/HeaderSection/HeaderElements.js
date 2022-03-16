import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  position: relative;
  padding: 3rem 10rem 100px;
  @media screen and (max-width: 786px) {
    padding: 2rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 100;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 20px;
  max-width: 100%;
  text-align: justify;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroStatistics = styled.div`
  color: #fff;
  font-size: 20px;
  height: 100%;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    /* float: left; */
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    /* float: left; */
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Input = styled.input`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  width: 130%;
  height: 60px;
  outline: none;
  font-size: 15px;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ServicesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  /* background: #fff; */
  background: linear-gradient(
    #fedb37 10%,
    #fdb931 100%,
    #9f7928 90%,
    #8a6e2f 90%,
    transparent 20%
  );
  display: grid;
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  /* align-items: center; */
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ServicesIcon = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesData = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  display: inline-block;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  /* margin-bottom: 10px; */
  float: left;
  color: #000;
`;

export const ServicesH21 = styled.h2`
  font-size: 1rem;
  /* margin-bottom: 10px; */
  float: right;
  color: #000;
`;

export const ServicesP = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  height: 50px;
  color: #000;
  font-weight: bold;
`;
