import styled from "@emotion/styled";


const AppStyled = styled.main`
flex-direction: column;
@media screen and (min-width: 768px) {
    flex-direction: row;
}
  background-color: #FFFFFF;
  border: 2px solid var(--tertiary-color);
  border-radius: 20px;
  box-shadow: 0 0 10px 3px var(--shadow-color);
  padding: 20px;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;
  position: relative; 
  max-width: 500px;
  margin: 0 auto; 
`

export default AppStyled
