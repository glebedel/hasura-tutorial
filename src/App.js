import React, { useState } from 'react';
import Pixel from './Pixel';
import ColorPicker from './ColorPicker';
import { useSubscription } from '@apollo/react-hooks';
import { SUBSCRIPTION_GET_PIXELS } from './graphqlQueries';

function App() {
  const [color, changeColor] = useState('white');
  const { loading, error, data } = useSubscription(SUBSCRIPTION_GET_PIXELS);

  if (loading) {
    return <h2> Loading ...</h2>;
  } else if (error) {
    return <h2>{JSON.stringify(error)}</h2>;
  }
  return (
    <div className="content">
      <div className="logo">Draw</div>
      <p>Pick a Color</p>
      <ColorPicker changeColor={changeColor} />
      <p>Click a Pixel</p>
      <div className="container">
        {data.pixels.map((pixel) => (
          <Pixel {...pixel} key={pixel.id} newColor={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
