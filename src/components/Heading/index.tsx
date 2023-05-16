import React from 'react';

type HeadingType = {
  copy: string;
  size: "m" | "l" | "xl";
}

const Heading: React.FC<HeadingType> = ({ copy, size }) => {
  return (
    <h2></h2>
  )
}

export default Heading;