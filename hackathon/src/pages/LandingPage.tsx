import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../assets/imgs/Splash1.svg';
import { ReactComponent as Logo2 } from '../assets/imgs/Splash2.svg';
import { ReactComponent as Logo3 } from '../assets/imgs/Splash3.svg';
import { Link, useMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface IForm {
  userName: string;
  password: string;
}

const LandingPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const LoginMatch = useMatch('/');
  const SignUpMatch = useMatch('/signUp');

  const onValid = (data: IForm) => {};
  return (
    <Container>
      <Wrapper>
        <span style={{ marginRight: '80px', marginTop: '30px' }}>
          <Logo1 />
        </span>
        <span style={{ marginLeft: '60px' }}>
          <Logo2 />
        </span>
        <span style={{ marginRight: '80px' }}>
          <Logo3 />
        </span>
        <Name>Love Dive!</Name>
        <LoginWrapper>
          <Menu>
            <Link to="/">LOG IN</Link>
            <Link to="/signUp">SIGN UP</Link>
          </Menu>
          <Form onSubmit={handleSubmit(onValid)}>
            <input
              {...register('userName', { required: true })}
              placeholder="Username"
            />
            <input
              {...register('password', { required: true })}
              placeholder="Password"
            />
            {LoginMatch && <input type="submit" value="LOG IN" />}
            {SignUpMatch && <input type="submit" value="SIGN UP" />}
          </Form>
        </LoginWrapper>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fcc 0%, rgba(255, 204, 204, 0) 60.6%);
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 100px;
    height: 130px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Name = styled.h1`
  color: #ed625b;
  font-size: 48px;
  font-weight: 600;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 506px;
  height: 400px;
  border-radius: 20px;
  background: #ffbcbc;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    font-weight: 600;
    font-size: 20px;
  }
  a:first-child {
    margin-left: 80px;
  }
  a:last-child {
    margin-right: 80px;
  }
  margin-bottom: 30px;
  padding-top: 30px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  input {
    width: 80%;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 30px;
    background-color: white;
    border: none;
  }
  input[type='submit'] {
    border-radius: 30px;
    background: #ed625b;
    color: white;
    font-weight: 600;
  }
`;
