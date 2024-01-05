import { useRecoilState } from 'recoil';
import { LoginState } from '../../atoms';
import { Link, useMatch } from 'react-router-dom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as Logo } from '../../assets/imgs/Logo.svg';
import { theme } from '../../theme';

const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const HomeMatch = useMatch('/');
  const WriteMatch = useMatch('/writeDiary');
  const CommunityMatch = useMatch('/community');
  const MyPageMatch = useMatch('/mypage');

  return (
    <Layout>
      <Nav>
        <Col>
          <Items>
            <Item>
              <Link to={`/`}>
                <Logo />
                <span
                  style={{
                    color: '#C5251D',
                  }}
                >
                  Love Dive!
                </span>
              </Link>
            </Item>
          </Items>
        </Col>
        <Col>
          <Items>
            <Item>
              <Link to="/" style={{ color: '#C5251D', fontWeight: 600 }}>
                홈
              </Link>
              {HomeMatch && <Circle layoutId="circle" />}
            </Item>
            <Item>
              <Link
                to={'/writeDiary'}
                style={{ color: '#C5251D', fontWeight: 600 }}
              >
                이달의 일지
              </Link>
              {WriteMatch && <Circle layoutId="circle" />}
            </Item>
            <Item>
              <Link
                to={'/community'}
                style={{ color: '#C5251D', fontWeight: 600 }}
              >
                커뮤니티
              </Link>
              {CommunityMatch && <Circle layoutId="circle" />}
            </Item>
            <Item>
              <Link
                to={'/mypage'}
                style={{ color: '#C5251D', fontWeight: 600 }}
              >
                MY
              </Link>
              {MyPageMatch && <Circle layoutId="circle" />}
            </Item>
          </Items>
        </Col>
      </Nav>
    </Layout>
  );
};

export default Header;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 600px;
  top: 0;
  font-size: 18px;
  padding: 15px 20px;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -7px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.pink};
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
