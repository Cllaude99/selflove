import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import WriteDiary from '../pages/WriteDiary';
import Community from '../pages/Community';
import MyPage from '../pages/MyPage';
import MainPage from '../pages/MainPage';
import LandingPage from '../pages/LandingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/signUp',
        element: <LandingPage />,
      },
      {
        path: 'writeDiary',
        element: <WriteDiary />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
    ],
  },
]);
