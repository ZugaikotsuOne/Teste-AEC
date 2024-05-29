import styled from '@emotion/styled';


export const StyledButton = styled.button`
  display: flex;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  padding: 16px 32px;
  font-size: 16px;
  font-family: Roboto;
  background-color: var(--secondary-color);
  color: var(--background-color);
  border: none;
  border-style: solid;
  border-radius: 28px;
  border-color: var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  left: 50%;
  bottom: -32px; 
  transform: translateX(-50%);
  z-index: 1;

  &:hover {
    background-color: var(--primary-color);
  }
`;

