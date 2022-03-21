import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  background: #0c0c0c;
  height: 80px;
  padding: 1rem 3rem;
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const LogoImage = styled.img`
  width: 50px;
  display: inline-block;
  vertical-align: middle;
`;

export const Logo = styled.div`
  color: white;
  font-size: 25px;
  padding: 0 1rem;
  display: inline-block;
  vertical-align: middle;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  display: inline-block;
  /* &.active {
    color: #15cdfc;
  } */
`;

export const Cross = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: inline-block;
  width: 80%;
  text-align: right;
  @media screen and (max-width: 768px) {
    display: none;
    ${({ active }) =>
      active &&
      `
    display: block;
    height: 100vh;
    width: 100%;
    position: fixed;
    background: #000;
    top: 60px;
    left: 0;
    z-index: 1;
    ${NavLink} {
      display: block;
      text-align: center;
      height: 30px;
      margin-top: 10px;
      font-size: 1.2rem;
    }
`}
  }
`;

export const MobileNavMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const NavBtn = styled.nav`
  margin-left: 24px;
  display: inline-block;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
