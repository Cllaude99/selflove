import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { LoginState } from './atoms';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const isLogin = useRecoilValue(LoginState);
  return (
    <>
      <GlobalStyle />
      {isLogin ? <Header /> : null}
      <Layout>
        <Outlet />
      </Layout>
      {isLogin && <Footer />}
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Mukta&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
  box-sizing: border-box;
}
body{
  font-family: 'Do Hyeon', sans-serif;
  font-family: 'Mukta', sans-serif;
}
a{
  text-decoration: none;  
  color: inherit;
}
`;
const Layout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;
