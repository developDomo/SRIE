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
const LineTitle = styled.div`
  padding: 3px 1px;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 5px;
  box-sizing: content-box;
  text-align: center;
  font-size: 0.9em;
`;

export const LineTime = ({ timeLineEducationProps }) => (
  <LineContainer>
    {timeLineEducationProps.map((item, index) => (
      <Line color={item.color} width={item.width} key={`line-${index}`} />
    ))}
  </LineContainer>
);

export const TitleLineTime = ({ timeLineEducationProps }) => (
  <LineContainer>
    {timeLineEducationProps.map((item, index) => (
      <LineTitle
        color={item.color}
        width={item.width}
        key={`LineTitle-${index}`}
      >
        {item.title}
      </LineTitle>
    ))}
  </LineContainer>
);
