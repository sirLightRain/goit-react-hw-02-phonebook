import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 2px solid black;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.yellow};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

export const InputButton = styled.button`
  width: 160px;
  padding: 4px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.lightGrey};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.blue};
  }
`;
