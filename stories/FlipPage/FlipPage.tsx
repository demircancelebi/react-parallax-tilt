import React, { useState } from 'react';

import Tilt from '../../src';
import './FlipPage.scss';
import Page from './Page/Page';

const FlipPage = () => {
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);

  return (
    <div className="flip-page">
      <Tilt flipVertically={flipVertically} flipHorizontally={flipHorizontally}>
        <Page
          flipVertically={flipVertically}
          flipHorizontally={flipHorizontally}
          toggleFlipVertically={checked => toggleFlip([checked, flipHorizontally])}
          toggleFlipHorizontally={checked => toggleFlip([flipVertically, checked])}
        />
      </Tilt>
    </div>
  );
};

export default FlipPage;
