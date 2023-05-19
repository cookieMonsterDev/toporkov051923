import styled from "@emotion/styled";

export const Input = styled.input`
  position: absolute;
  appearance: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  inset: 0;
`;

export const Label = styled.label`
  height: 0.1rem;
  width: 2.3rem;
  top: 50%;
  left: 0;
  background-color: var(--white);
  border-radius: 2rem;
  position: absolute;
  transition-duration: 0.25s;
  transition-delay: 0.25s;

  &:before {
    content: "";
    position: absolute;
    top: -0.75rem;
    left: 0;
    height: 0.1rem;
    width: 2.3rem;
    background-color: var(--white);
    border-radius: 2rem;
    transition: transform 0.25s, top 0.25s 0.25s;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0.75rem;
    left: 0;
    width: 2.3rem;
    height: 0.1rem;
    background-color: var(--white);
    border-radius: 2rem;
    transition: transform 0.25s, top 0.25s 0.25s;
  }
`;

export const BurgerButton = styled.div`
  width: 2.3rem;
  height: 3rem;
  position: relative;
  z-index: 1000;
  cursor: pointer;

  & ${Input}:checked + ${Label} {
    transition-duration: 0.1s;
    transition-delay: 0.25s;
    background: transparent;

    &:before {
      transition: top 0.25s, transform 0.25s 0.25s;
      top: 0;
      transform: rotateZ(-45deg);
      background-color: var(--white);
    }

    &:after {
      transition: top 0.4s, transform 0.25s 0.25s;
      top: 0;
      transform: rotateZ(45deg);
      background-color: var(--white) ;
    }
  }

  @media only screen and (min-width: 70rem) {
    visibility: hidden;
    display: none;
  }

  @media only screen and (max-width: 28rem) {
    margin-right: 2rem;
  }
`;