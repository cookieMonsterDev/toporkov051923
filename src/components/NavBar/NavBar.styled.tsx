import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Container = styled.nav`
  position: relative;
  width: 100vw;
  height: 80px;
  padding: 20px 70px;
  background: var(--primary);
  display: flex;
  align-items: center;

  @media only screen and (max-width: 70rem) {
    padding: 20px 16px 20px 21px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  
  @media only screen and (max-width: 70rem) {
    flex: 1;
  }
`;

export const RightContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SelectContainer = styled.div`
  @media only screen and (max-width: 70rem) {
    visibility: hidden;
    display: none;
  }
`;

export const Logo = styled.div`
  color: red;
  margin-right: 40px;

  @media only screen and (max-width: 70rem) {
    margin: auto;
  }
`;

export const TabsContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;

  @media only screen and (max-width: 70rem) {
    visibility: hidden;
    display: none;
  }
`;

export const Tab = styled.li<{ isActive?: boolean }>`
  color: var(--white);
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  transition: all 300ms;

  &:hover {
    color: var(--secondary);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--secondary);
    `}
`;

export const LoginButton = styled(Button)`
  text-transform: none;
  box-sizing: border-box;
  height: 40px;
  color: var(--primary);
  background: var(--secondary);
  padding: 2px 24px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    color: var(--primary);
    background: var(--light-secondary);
  }
`;

export const Register = styled(Button)`
  text-transform: none;
  color: var(--white);
  background: var(--primary);
  padding: 6px 24px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    color: var(--secondary);
  }

  @media only screen and (max-width: 70rem) {
    visibility: hidden;
    display: none;
  }
`;

export const SideMenuContainer = styled.div<{ isShow?: boolean }>`
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100vw;
  padding: 90px 20px 10px 20px;
  background-color: var(--primary);
  transform: translateX(-100%);
  transition: all 700ms;
  z-index: 10000;

  ${({ isShow }) =>
    isShow &&
    css`
      transform: translate(0);
    `}
`;

export const SideMenuTabs = styled.ul`
  list-style: none;
`;

export const SideMenuTab = styled(Tab)`
  padding: 15px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const SideMenuButtonsConatiner = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 28px;
`;

export const RegisterSideButton = styled(Button)`
  box-sizing: border-box;
  text-transform: none;
  height: 40px;
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--white);
  padding: 2px 24px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    color: var(--white);
    background: var(--primary);
  }
`;

export const Hr = styled.hr`
  background: rgba(255, 255, 255, 0.2);

  &:active {
    background-color: red;
  }
`;