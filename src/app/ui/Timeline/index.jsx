import React from 'react';
import Div from '../Div';

export default function Timeline({ columnData }) {
  return (
    <>
      {columnData.map((item, index) => (
        <Div className="cs-time_line cs-style1" key={index}>
          <h3 className="cs-accent_color">{item.year}</h3>
          <h2>{item.name}</h2>
          <p>{item.position}</p>
          <p>{item.type}</p>
        </Div>
      ))}
    </>
  );
}
