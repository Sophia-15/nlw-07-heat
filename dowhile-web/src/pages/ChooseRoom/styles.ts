import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/background.svg';

export const Container = styled.main`
  max-width: 75rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 28.3125rem;
  column-gap: 7.5rem;
  position: relative;

  &::before {
    content: "";
    height: 100vh;
    width: 35%;
    background: url(${background}) no-repeat;
    background-size: cover;
    position: absolute;
    right: -16%;
    top: 0;
  }

  .rooms {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    img {
      width: 17.5rem;
      margin-right: 10rem;
    }
  }

  .room-list {
    margin-top: 16.25rem;
    list-style: none;

    li {
      background: ${({ theme }) => theme.colors.black3};
      margin-bottom: 2.625rem;
      width: 30.4375rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 2rem 2.6875rem;
      border-radius: .5rem;

      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  @media (max-width: 1122px) {
    &::before {
      display: none;
    }
  }
`;

export const Button = styled(Link)`
  font-size: .875rem;
  color: ${({ theme }) => theme.colors.black1};
  background: ${({ theme }) => theme.colors.yellow};
  font-weight: 600;
  padding: .3125rem 1.3125rem;
  cursor: pointer;
  border: none;
  border-radius: .5rem;
  text-decoration: none;

  &:hover {
    filter: brightness(90%);
  }
`;
