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
  SelectContainer,
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
import Image from "next/image";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrency } from "@/store/currencySlice";

export const NavBarComponent: React.FC<NavBarProps> = ({ tabs }) => {
  const router = useRouter();
  const { currency } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);
  const handleShow = () => setShow((prev) => !prev);

  const handleChange = (e: any) => dispatch(setCurrency(e))
   
  return (
    <Container>
      <LeftContainer>
        <BurgerButton onChange={handleShow} checked={show} />
        <Logo>
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={120} height={50} />
          </Link>
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
        <SelectContainer>
          <Select list={...selectOptions} />
        </SelectContainer>
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
        <List
          sx={{
            width: "100%",
            bgcolor: "var(--primary)",
            color: "var(--white)",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon>
              <Image
                src={`/${currency.label.toLowerCase()}.png`}
                width={30}
                height={30}
                alt={"curr logo"}
              />
            </ListItemIcon>
            <ListItemText primary={currency.label} />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {selectOptions.map((e) => (
                <ListItemButton onClick={() => handleChange(e)} key={e.label}>
                  <ListItemIcon>
                    <Image
                      src={`/${e.label.toLowerCase()}.png`}
                      width={30}
                      height={30}
                      alt={"curr logo"}
                    />
                  </ListItemIcon>
                  <ListItemText primary={e.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
        <Hr />
        <SideMenuButtonsConatiner>
          <RegisterSideButton>Sign Up</RegisterSideButton>
          <LoginButton>Log in</LoginButton>
        </SideMenuButtonsConatiner>
      </SideMenuContainer>
    </Container>
  );
};
