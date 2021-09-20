import React from "react";
import styled from "styled-components";

interface IProps {
  background?: string;
  heigth?: number;
}

interface ILineS {
  background?: string;
  heigth: number;
}
const HorizontalLine: React.FC<IProps> = ({ background, heigth }) => {
  return <LineS background={background} heigth={heigth || 1}></LineS>;
};

export default HorizontalLine;

const LineS = styled.div<ILineS>`
  width: 100%;

  border-bottom: ${(props) =>
    props.background
      ? props.heigth + "px solid " + props.background // eslint-disable-next-line
      : props.heigth + "px solid " + "rgba(0, 0, 0, 0.1)"};
`;
