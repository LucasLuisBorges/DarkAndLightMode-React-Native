import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.color.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 32px;
`;
