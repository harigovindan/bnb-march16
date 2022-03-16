import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  position: relative;
  padding: 3rem 10rem;
  @media screen and (max-width: 768px) {
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
  z-index: 3;
  max-width: 100%;
  /* position: absolute; */
  /* padding: 8px 24px; */
  /* display: grid; */
  /* flex-direction: column; */
  /* display: inline; */
  align-items: center;
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
  /* margin-top: 24px; */
  color: #fff;
  font-size: 20px;
  /* text-align: left; */
  /* max-width: 650px; */
  /* text-align: justify; */
  /* float: right; */
  /* display: flex; */

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroStatistics = styled.div`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
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
  outline: none;
  font-size: 15px;
  width: 70%;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ServicesContainer = styled.div`
  /* height: 1000px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  background: #010606;

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const ServicesWrapper = styled.div`
  /* max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px; */
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
  }

  @media screen and (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    /* padding: 0 20px; */
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
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  margin-top: 50px;
  text-align: center;

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
  color: #000;
  width: 50%;
  display: inline-block;
  vertical-align: middle;
`;

export const ServicesH21 = styled.h2`
  font-size: 1rem;
  color: #000;
  width: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
`;

export const ServicesP = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  height: 50px;
  color: #000;
`;
