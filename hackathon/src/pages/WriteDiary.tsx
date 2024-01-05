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
        <Container2>
          <Area>
            <h1>오늘의 점수</h1>
          </Area>
          <Area>
            <h1>오늘의 일지</h1>
          </Area>
        </Container2>
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

const Container2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

const Area = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid green;
  h1 {
    font-size: 24px;
  }
`;
