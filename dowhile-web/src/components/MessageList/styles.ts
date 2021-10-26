import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 2rem 0;

    > img {
      width: 17.5rem;
    }
  }

  .roomName {
    font-size: 1.25rem;
    margin-top: 4rem;
    text-align: center;
  }

  @media (max-width: 1122px) {
    margin-bottom: 4rem;
  }
`;

export const MessageListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -15rem;
  flex: 1;
  gap: 2.5rem;
  
  h1 {
    text-align: center;
  }

  .notFoundImage {
    align-self: center;
  }

  .message {
    max-width: 27.5rem;

    &:nth-child(2) {
      margin-left: 5rem;
    }

    .messageContent {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    .messageUser {
      margin-top: 1rem;
      display: flex;
      align-items: center;

      .userImage {
        padding: .125rem;
        background: linear-gradient(100deg, ${({ theme }) => theme.colors.pink} 0.48%, ${({ theme }) => theme.colors.yellow} 100%);
        border-radius: 50%;
        line-height: 0;

        img {
          width: 1.875rem;
          height: 1.875rem;
          border-radius: 50%;
          border: .25rem solid ${({ theme }) => theme.colors.background};
        }
      }

      span {
        font-size: 1rem;
        margin-left: .75rem;
      }
    }
  }

  @media (max-width: 1122px) {
    margin-top: 4rem;

  .notFoundImage {
    width: 20rem;
  }

    .message {
      &:nth-child(2) {
      margin-left: 0;
    }
    }
  }
`;
