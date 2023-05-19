"use client";
import { Fragment, useState } from "react";
import { NavBarProps } from "./NavBar.types";
import {
  Container,
  Hr,
  LeftContainer,
  LoginButton,
  Logo,
  Register,
  RegisterSideButton,
  RightContainer,
  SideMenuButtonsConatiner,
  SideMenuContainer,
  SideMenuTab,
  SideMenuTabs,
  Tab,
  TabsContainer,
} from "./NavBar.styled";
import Link from "next/link";
import { BurgerButton } from "../BurgerButton";
import { useRouter } from "next/router";
import { Select } from "../Select";
import { selectOptions } from "@/select-options";

export const NavBarComponent: React.FC<NavBarProps> = ({ tabs }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prev) => !prev);

  return (
    <Container>
      <LeftContainer>
        <BurgerButton onChange={handleShow} checked={show} />
        <Logo href="/">
          {/* <img src={"/logo.svg"} alt="logo" width={18} height={18} /> */}
        </Logo>
      </LeftContainer>
      <TabsContainer>
        {tabs.map((e) => (
          <Link key={e.name} href={e.link}>
            <Tab isActive={router.asPath === e.link}>{e.name}</Tab>
          </Link>
        ))}
      </TabsContainer>
      <RightContainer>
        <Select list={...selectOptions} />
        <Register>Sign Up</Register>
        <LoginButton>Log in</LoginButton>
      </RightContainer>
      <SideMenuContainer isShow={show}>
        <Hr />
        <SideMenuTabs>
          {tabs.map((e) => (
            <Fragment key={e.name}>
              <Link href={e.link}>
                <SideMenuTab isActive={router.asPath === e.link}>
                  {e.name}
                </SideMenuTab>
              </Link>
              <Hr />
            </Fragment>
          ))}
        </SideMenuTabs>
        <div>test</div>
        <Hr />
        <SideMenuButtonsConatiner>
          <RegisterSideButton>Sign Up</RegisterSideButton>
          <LoginButton>Log in</LoginButton>
        </SideMenuButtonsConatiner>
      </SideMenuContainer>
    </Container>
  );
};
