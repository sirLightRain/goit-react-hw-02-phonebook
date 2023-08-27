import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  padding: 16px;
  background-color: ${props => props.theme.colors.yellow};
  border-radius:8px;
  outline: 2px solid black;
`;

export const InputLine = styled.input`
  width: 240px;
  border: none;
  border-radius: 8px;
  padding: 0 4px 4px 8px;
  background-color: ${props => props.theme.colors.lightGrey};
  &:focus {
    outline: none;
    outline: 4px solid ${props => props.theme.colors.blue};
  }
`;