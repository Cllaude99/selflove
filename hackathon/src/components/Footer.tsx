import React from 'react';
import { styled } from 'styled-components';
import kakao from '../assets/imgs/kakao.svg';
import insta from '../assets/imgs/insta.svg';
import twitter from '../assets/imgs/twitter.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <IconWrapper>
        <img src={kakao} alt="kakao" />
        <img src={insta} alt="insta" />
        <img src={twitter} alt="twitter" />
      </IconWrapper>
      <Description>
        <p>상호 : 러브다이브 | 대표자명 : 박건휘 | 개인정보</p>
        <p>주소 : 서울 마포구 와우산로21길 19-11 4층 홍테라스대 본점</p>
        <p>이용 약관 &emsp; 개인정보처리방침</p>
      </Description>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background: #fcc;
  padding: 100px;
  margin-top: 240px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 50px;
    height: 50px;
    margin: 28px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;

  > p {
    color: #606060;
    text-align: center;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;
