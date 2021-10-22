import React from 'react';
import { UserPhoto } from '../UserPhoto';

import {
  Container,
  MessageText,
  UserInfoContainer,
  UserName,
} from './styles';

interface UserProps {
  name: string
  avatar_url: string
}

interface MessageProps {
  id: string
  text: string
  user: UserProps
}

interface Props {
  data: MessageProps
}

export function Message({ data }: Props) {
  return (
    <Container>
      <MessageText>
        {data.text}
      </MessageText>

      <UserInfoContainer>
        <UserPhoto imageUri={data.user.avatar_url} sizes="small" />

        <UserName>{data.user.name}</UserName>
      </UserInfoContainer>
    </Container>
  );
}
