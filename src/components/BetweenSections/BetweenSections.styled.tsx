import styled from '@emotion/styled';

export const BetweenSectionsStyled = styled.section`

display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
  text-align: center;
  background-color: var(--background-color);
  border-radius: 10px;
  color: var(--primary-color);

  
`

export const StatItem = styled.div`
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const HighlightText = styled.b`
  color: var(--secondary-color);
  font-size: 65%;
  vertical-align: top;
  line-height: 1;

`;
