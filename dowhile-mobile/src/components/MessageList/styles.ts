import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'never',
  contentContainerStyle: {
    paddingTop: 135,
    paddingBottom: 184,
  },
})`
  flex: 1;
  padding: 0 20px ;
`;
