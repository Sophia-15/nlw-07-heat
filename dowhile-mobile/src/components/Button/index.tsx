import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ColorValue, ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string
  color: ColorValue
  backgroundColor: ColorValue
  icon?: React.ComponentProps<typeof AntDesign> ['name']
  isLoading?: boolean
}

export function Button({
  backgroundColor, color, title, icon, isLoading = false, ...rest
}: ButtonProps) {
  return (
    <Container
      {...rest}
      style={{ backgroundColor }}
      disabled={isLoading}
    >
      { isLoading
        ? <ActivityIndicator color={color} />
        : (
          <>
            <Icon name={icon} />
            <ButtonText
              style={{ color }}
            >
              {title}
            </ButtonText>
          </>
        )}
    </Container>
  );
}
