import { styled } from 'styled-components';
import logo from '../assets/imgs/Logo.svg';
import { useCallback } from 'react';
import Graph from './Graph';

const user = { name: '럽다이브', checklist: 7, record: 23, complete: 12 };
const diary = [
  { id: 1, title: '1번 일기', content: '1번 일기 입니당.' },
  { id: 2, title: '2번 일기', content: '2번 일기 입니당.' },
  { id: 3, title: '3번 일기', content: '3번 일기 입니당.' },
];

const getLastDate = (): Number => {
  const date = new Date();
  const month = new Date(date.getFullYear(), date.getMonth(), 0);
  return month.getDate();
};

const Home = () => {
  const onClickAddDiary = useCallback(() => {
    console.log('click add diary');
  }, []);

  return (
    <>
      <HomeContainer>
        <NameContainer>
          <Circle>
            <img src={logo} alt="logo" />
          </Circle>
          <p>{user.name}</p>
        </NameContainer>
        <MainContainer>
          <TitleContainer>
            <h3>{user.name}님 반가와요!</h3>
            <h3>오늘도 열심히 자기애 충전!</h3>
            <BoxContainer>
              <Box>
                <p className="phrase">체크리스트</p>
                <p>{`${user.checklist}/${getLastDate()}`}</p>
              </Box>
              <Box>
                <p className="phrase">기록일수</p>
                <p>{`${user.record}/${getLastDate()}`}</p>
              </Box>
              <Box>
                <p className="phrase">100%달성</p>
                <p>{`${user.complete}/${getLastDate()}`}</p>
              </Box>
            </BoxContainer>
          </TitleContainer>
        </MainContainer>
        <Graph />
        <PostContainer>
          <PostHeaderContiner>
            <PostHeader>
              <h5>이번 달 내가 작성한 글</h5>
              <p>{diary.length}개의 글</p>
            </PostHeader>
            <AddDiaryButton onClick={onClickAddDiary}>
              <p>+글쓰기</p>
            </AddDiaryButton>
          </PostHeaderContiner>
          <DiaryListConianer>
            <DiaryListHeader>
              <p>글 제목</p>
              <p>작성 일</p>
            </DiaryListHeader>
          </DiaryListConianer>
        </PostContainer>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(180deg, #ffeaea -3.65%, #fefefe 15.91%);
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 70%;
  padding: 20px 0;
  margin-top: 12px;
  margin-bottom: 44px;

  p {
    color: #3f3f3f;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #ffffff;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 26px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 200px;
  width: 70%;
`;

const TitleContainer = styled.div`
  > h3 {
    color: #da4a42;
    font-family: Nanum Gothic;
    font-size: 44px;
    font-weight: 600;
    line-height: 68px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 112px;
  height: 36px;
  border-radius: 15px;
  background: #e9f9f5;
  margin-top: 8px;
  margin-right: 16px;
  padding: 16px;

  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 600;

  .phrase {
    color: #54ac8d;
  }

  .num {
    color: #494949;
  }
`;

const PostContainer = styled.div`
  width: 70%;
  margin-top: 120px;
`;

const PostHeaderContiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;

  > h5 {
    color: #c5251d;
    font-family: Nanum Gothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  > p {
    color: #505050;
    font-family: Nanum Gothic;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 12px;
  }
`;

const AddDiaryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 32px;
  border-radius: 15px;
  background: #e9f9f5;
  cursor: pointer;

  > p {
    color: #54ac8d;
    text-align: center;
    font-family: Nanum Gothic;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const DiaryListConianer = styled.div`
  margin-bottom: 24px;
`;

const DiaryListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #383838;

  > p {
    color: #727272;
    font-family: Nanum Gothic;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
