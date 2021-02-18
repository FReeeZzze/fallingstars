import React from 'react';
import styled from '@emotion/styled';
import mainBackground from 'assets/background.png';
import FallingStarItem from './components/FallingStarItem';
import useInterval from 'hooks/useInterval';

const MainContainer = styled.main((): any => ({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  alignContent: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#009BCC',
  backgroundImage: `url(${mainBackground})`,
}));

const ZoneFallingStars = styled.div((): any => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '38rem',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
}));

const MainPage = (): JSX.Element => {
  const [stars, setStars] = React.useState([]);

  useInterval(() => {
    if (stars.length <= 5) {
      setStars((prev) => [...prev, Math.floor(Math.random() * 10)]);
    }
  }, 1575);

  React.useEffect(() => {
    console.log('stars: ', stars);
  }, [stars]);

  return (
    <MainContainer>
      <ZoneFallingStars>
        {stars.map((item, index) => (
          <FallingStarItem key={`key: ${index} item`} currentNumber={item} />
        ))}
      </ZoneFallingStars>
    </MainContainer>
  );
};

export default MainPage;
