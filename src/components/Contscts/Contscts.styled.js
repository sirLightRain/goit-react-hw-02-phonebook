import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  width: 450px;


`;

export const ContactInfo = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  width: 80px;
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
