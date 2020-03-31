import React from 'react';
import Button from 'components/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Homepage() {
  return (
    <div>
      <GlobalStyle />
      <Button >Add</Button>
      <Button secondary>Remove</Button>
    </div>
  );
}

export default Homepage;
