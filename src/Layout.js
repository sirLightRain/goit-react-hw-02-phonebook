import styled from 'styled-components';

export const Layuot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  background-color: ${props => props.theme.colors.red}; 
`;
