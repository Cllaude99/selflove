import styled from 'styled-components';
import KanbanBoard from '../components/KanbanBoard';

const WriteDiary = () => {
  // 백으로 부터
  return (
    <Layout>
      <Container>
        <Day>2023년 2월 14일</Day>
        <h1
          style={{
            marginLeft: '16px',
            marginTop: '12px',
            marginBottom: '15px',
          }}
        >
          이번달 체크리스트
        </h1>
        <div
          style={{
            width: '100%',
            height: '500px',
            borderRadius: '24px',
            background:
              'linear-gradient(180deg, #FFB8B8 0%, rgba(217, 217, 217, 0.00) 100%)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            margin: '0 auto',
          }}
        >
          <KanbanBoard />
        </div>
        <BoxWrapper>
          <BoxContainer>
            <p>오늘의 러브스코어</p>
            <ScoreBox>
              <PercentBlock>
                <p>25%</p>
              </PercentBlock>
            </ScoreBox>
          </BoxContainer>
          <BoxContainer>
            <p>오늘의 일지</p>
            <DiaryBox>
              <p>
                {' '}
                The borderDash property is used to specify the pattern of dashes
                for the grid lines, and drawTicks is set to false to prevent
                ticks from being drawn perpendicular to the x-axis. Adjust the
                values according to your preferences for the dashed grid lines.
              </p>
            </DiaryBox>
          </BoxContainer>
        </BoxWrapper>
      </Container>
    </Layout>
  );
};

export default WriteDiary;

const Layout = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #ffeaea -3.65%, #fff 49.93%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
const Day = styled.h1`
  font-size: 32px;
  margin-top: 20px;
  margin-left: 16px;
  font-weight: 700;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
`;

const BoxContainer = styled.div`
  > p {
    display: inline;
    color: #3a3a3a;
    font-family: Nanum Gothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color: #e9f9f5;
  }
`;

const Box = styled.div`
  width: 500px;
  height: 412px;
  border-radius: 24px;
  background: linear-gradient(180deg, #ff9797 0%, rgba(255, 252, 252, 0) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
`;

const ScoreBox = styled(Box)`
  display: flex;
  justify-content: center;
  > img {
  }
`;

const PercentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 32px;
  background: #ed625b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  > p {
    color: #fff;
    font-family: Nanum Gothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const DiaryBox = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 80px 40px;

  > p {
    color: #1d1d1d;
    font-family: Nanum Gothic;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }
`;
