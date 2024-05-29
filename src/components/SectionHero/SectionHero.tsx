import { SectionHeroStyled, SectionText, HighlightText } from './SectionHero.styled';
import Button from '../Button/Button';
import Props from '../../assets/props.svg'


const SectionHero: React.FC = () => {

    const handleButtonClick = () => {
        alert('Button clicked!');
      };
    
  return (
    <SectionHeroStyled>
      <img className='Props' src={Props}/>
      <h1>LET'S TURN YOUR VLOGGING PASSION</h1>
      <SectionText>
        Join Us on Our Blog and Enjoy <HighlightText>High-Quality Content</HighlightText> that Inspires and Provides Solutions
      </SectionText>
      <Button onClick={handleButtonClick}>JOIN BE PARTNER</Button>
    </SectionHeroStyled>
  );
};

export default SectionHero;