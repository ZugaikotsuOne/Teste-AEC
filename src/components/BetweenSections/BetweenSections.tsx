import { BetweenSectionsStyled, StatItem, HighlightText } from './BetweenSections.styled'

const BetweenSections: React.FC = () => {

  return (
    <BetweenSectionsStyled>
      <StatItem>
        <h1>35.2<HighlightText>+</HighlightText></h1>
        <h6>REVIEWS</h6>
      </StatItem>
      <StatItem>
        <h1>20K<HighlightText>+</HighlightText></h1>
        <h6>REVIEWS</h6>
      </StatItem>
      <StatItem>
        <h1>89<HighlightText>%</HighlightText></h1>
        <h6>REVIEWS</h6>
      </StatItem>
      <StatItem>
        <h1>2016</h1>
        <h6>REVIEWS</h6>
      </StatItem>
    </BetweenSectionsStyled>

  );
};

export default BetweenSections;