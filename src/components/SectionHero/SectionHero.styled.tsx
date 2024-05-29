import styled from '@emotion/styled';

export const SectionHeroStyled = styled.section`

.Props{
  position: absolute;
  left: 100%;
  bottom: 140px; 
  transform: translateX(-50%);
  z-index: 1;
}

  background-color: var(--background-color);
  color: var(--primary-color);
  border: 2px solid var(--tertiary-color);
  border-radius: 20px;
  box-shadow: 0 2px 3px 1px var(--shadow-color);
  padding: 20px;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;
  position: relative; 
  max-width: 500px;
  margin: 0 auto; 
`;

export const SectionText = styled.p`
  font-size: 16px;
  color: var(--primary-color);
  margin: 10px 0;
`;

export const HighlightText = styled.b`
  color: var(--secondary-color);
`;

