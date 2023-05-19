import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Image from "next/image";

export const MySelect = styled(Select)`
  color: var(--white);
  border: none;

  &:active {
    border: none;
  }

  > svg {
    color: var(--white);
  }

  > fieldset {
    border: none;
  }

  & .MuiSelect-select {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MyMenuItem = styled(MenuItem)`
  display: flex;
  color: var(--white);
  background: var(--primary);
  align-items: center;

  &:hover {
    background: rgba(44, 62, 103, 0.7);
    color: var(--secondary)
  }
`;

export const MyImg = styled(Image)`
  margin-right: 10px;
`
