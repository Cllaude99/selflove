import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../assets/imgs/Splash1.svg';
import { ReactComponent as Logo2 } from '../assets/imgs/Splash2.svg';
import { ReactComponent as Logo3 } from '../assets/imgs/Splash3.svg';

const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Name>Love Dive!</Name>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #fcc 0%, rgba(255, 204, 204, 0) 60.6%);
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 150px;
    height: 178px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 90vh;
  border: 1px solid black;
  margin: 0 auto;
`;

const Name = styled.h1`
  color: #ed625b;
  font-size: 72px;
`;
