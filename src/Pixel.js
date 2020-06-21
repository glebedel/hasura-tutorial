import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_COLOR } from './graphqlQueries';

const Pixel = ({ id, color, newColor }) => {
  const [updatePixelColor] = useMutation(UPDATE_COLOR);

  return (
    <span
      className="pixel"
      onClick={() => {
        updatePixelColor({ variables: { id, color: newColor } });
      }}
      style={{ backgroundColor: color }}
    ></span>
  );
};

export default Pixel;
