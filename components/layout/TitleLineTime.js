import React from 'react';
import styled from 'styled-components';


const LineContainer = styled.div`
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Line = styled.div`
  padding: 3px 1px;
  height: 2px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 5px;
  box-sizing: content-box;
`;

const TitleLineTime = () => (
  <LineContainer>
    <Line color="#fb8080" width="21.5%">
      Materno infantil
    </Line>

    <Line color="#bc6060" width="10.6%" />
    <Line color="#7ab239" width="50%" />
    <Line color="#0071bc" width="15.1%" />
  </LineContainer>
);

export default TitleLineTime;
