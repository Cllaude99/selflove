import { useRecoilValue } from 'recoil';
import { LoginState } from '../atoms';
import LandingPage from './LandingPage';
import Home from './Home';
import { styled } from 'styled-components';

const MainPage = () => {
  const isLogin = useRecoilValue(LoginState);
  if (!isLogin) {
    return <LandingPage />;
  } else {
    return <Home />;
  }
};

export default MainPage;
