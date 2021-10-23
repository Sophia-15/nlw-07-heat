import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background: ${({ theme }) => theme.colors.formBackground};
  padding: 1.5rem;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.gray2};

  position: absolute;
  left: 1.5rem;
  top: 1.5rem;

  cursor: pointer;

  svg {
    font-size: 2rem;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;

export const SendMessageFormHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .userImage {
    padding: .1875rem;
    background: linear-gradient(100deg, ${({ theme }) => theme.colors.pink} 0.48%, ${({ theme }) => theme.colors.yellow} 100%);
    border-radius: 50%;
    line-height: 0;

    img {
      width: 5.875rem;
      height: 5.875rem;
      border-radius: 50%;
      border: .375rem solid ${({ theme }) => theme.colors.background};
    }
  }

  .userName {
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-top: 1rem;
  }

  .userGithub {
    display: flex;
    align-items: center;

    margin-top: .5rem;
    color: ${({ theme }) => theme.colors.gray2};

    svg {
      margin-right: .5rem;
    }
  }
`;

export const SendMessageFormDoWhile = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 3rem;

  background: ${({ theme }) => theme.colors.black3};

  label {
    padding: 1.125rem 1.5rem;
    font-size: 1.25rem;
    background: ${({ theme }) => theme.colors.black4};
    font-weight: 700;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 1.5rem;
    resize: none;
    height: 10rem;
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 1rem;
    line-height: 1.5rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
    }
  }

  button {
    align-self: flex-end;
    background: ${({ theme }) => theme.colors.pink};
    margin: 1.5rem;
    padding: 0 2rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: .875rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.85);
    }
  }
`;
