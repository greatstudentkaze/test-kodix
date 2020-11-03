import React, { useState } from "react";
import styled from 'styled-components';

import './css/fonts.css';
import GlobalStyle from './components/styled/GlobalStyle';

import Button from './components/Button';
import Popup from './components/Popup';

const StyledMain = styled.main`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  background-color: ${props => props.isShowPopup ? '#ffffff' : 'transparent'};
`;

const App = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const hidePopup = () => setIsShowPopup(false);
  const showPopup = () => setIsShowPopup(true);

  return (
    <>
      <GlobalStyle />
      <StyledMain isShowPopup={isShowPopup}>
        <Button type="button" text="Налоговый вычет" handleClick={showPopup} />
        {isShowPopup && <Popup hidePopup={hidePopup} />}
      </StyledMain>
    </>
  );
}

export default App;
