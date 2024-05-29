import styled from '@emotion/styled';

export const SectionTwoStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  
`;

export const Portrait = styled.div`
  background-color: var(--background-color);
  width: 172px;
  height: 219.38px;
  border: 6px solid var(--primary-color);
  border-radius: 180px;
  margin-bottom: 20px; 
  z-index: 2;
`;

export const BackgroundText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 340.21px;
  background: var(--secondary-color);
  border-radius: 32px;
  position: absolute;
  left: 50%;
  bottom: -150px; 
  transform: translateX(-50%);
  z-index: 1;

  div{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    height: 100%;

  }

  span {
    display: flex;
    align-items: center;
    font-family: 'Rammetto One';
    font-size: 20px;
    margin-bottom: 8px; 
  }

  .Check {
    margin-right: 8px;
  }
`;

export const Frame = styled.section`

  background-color: var(--background-color);
  color: var(--background-color);
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
`
export const CircleText = styled.img`
position: absolute;
left: 98px;
top: 30px;
`

export const Arrow = styled.img`
position: absolute;
right: 89px;
top: 89px;

`