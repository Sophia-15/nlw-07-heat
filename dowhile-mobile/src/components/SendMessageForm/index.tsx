import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { api } from '../../services/api';

import { Container, SendMessageTextInput, SendMessageButton } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  async function sendMessage() {
    const formattedMessage = message.trim();

    if (formattedMessage.length > 0) {
      setIsSendingMessage(true);
      await api.post('/message', { message: formattedMessage });

      setMessage('');
      Keyboard.dismiss();
      setIsSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso!');
    } else {
      Alert.alert('Esse campo não pode ficar em branco');
    }
  }

  return (
    <Container>
      <SendMessageTextInput
        onChangeText={setMessage}
        value={message}
        editable={!isSendingMessage}
      />

      <SendMessageButton isLoading={isSendingMessage} onPress={sendMessage} />
    </Container>
  );
}
