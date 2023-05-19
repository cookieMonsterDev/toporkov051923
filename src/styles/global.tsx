import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const globalStyle = css`
  ${emotionNormalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Gilroy";
    font-style: normal;
  }

  #__next {
    width: 100vw;
    height: 100vh;
  }

  a {
    text-decoration: none;
  }

  & .MuiMenu-list {
    padding: 0;
  }

  & .MuiMenu-paper {
    background-color: red;
  }

  &:root {
    --primary: #142241;
    --secondary: rgba(233, 177, 9, 1);
    --light-secondary: #f4c63f;
    --white: #fafafa;
  }
`;
