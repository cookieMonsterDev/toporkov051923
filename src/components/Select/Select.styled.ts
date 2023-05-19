import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

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

  & .MuiMenu-paper {
    background-color: red;
  }
`;

export const MyMenuItem = styled(MenuItem)`
  display: flex;
  background: var(--primary);

  & .Mui-selected {
    background: rgba(44, 62, 103, 0.2);
  }
`;
