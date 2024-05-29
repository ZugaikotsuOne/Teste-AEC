import React from "react";
import {
  SectionTwoStyled,
  Portrait,
  BackgroundText,
  Frame,
  CircleText,
  Arrow,
} from "./SectionTwo.styled";
import Check from "../../assets/check.svg";
import CircleSVG from "../../assets/circletext.svg";
import ArrowSVG from "../../assets/arrow.svg";

const SectionTwo: React.FC = () => {
  return (
    <Frame>
      <SectionTwoStyled>
        <CircleText src={CircleSVG} alt="CircleText icon" />
        <Arrow src={ArrowSVG} alt="Arrow icon" />
        <Portrait></Portrait>
        <BackgroundText>
          <div>
            <span>
              <img className="Check" src={Check} alt="Check icon" />
              TRUSTED
            </span>
            <span>
              <img className="Check" src={Check} alt="Check icon" />
              ACTUAL
            </span>
            <span>
              <img className="Check" src={Check} alt="Check icon" />
              PROFESSIONAL
            </span>
            <span>
              <img className="Check" src={Check} alt="Check icon" />
              ACTUAL
            </span>
          </div>
        </BackgroundText>
      </SectionTwoStyled>
    </Frame>
  );
};

export default SectionTwo;
