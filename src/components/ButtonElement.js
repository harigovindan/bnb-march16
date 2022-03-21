import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  /* background: #010606; */
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  /* color: #fff; */
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: block;
  width: 60%;
  margin: 20px auto 0 auto;
  text-align: center;

  &:hover {
    /* transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#000" : "#01bf71")}; */
    /* color: ${({ dark }) => (dark ? "#fff" : "#000")}; */
    color: #fff;
    transform: scale(1.05);
  }
`;

export const Button1 = styled(Link)`
  /* margin-top: 15px; */
  border-radius: 50px;
  /* background: ${({ primary }) => (primary ? "#01BF71" : "#010606")}; */
  background: linear-gradient(
    #fedb37 10%,
    #fdb931 100%,
    #9f7928 90%,
    #8a6e2f 90%,
    transparent 20%
  );
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    /* /* transition: all 0.2s ease-in-out; */
    /* background: ${({ primary }) => (primary ? "#fff" : "#01bf71")}; */
    color: #010606;
  }
`;
