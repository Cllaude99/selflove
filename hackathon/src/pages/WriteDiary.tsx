import styled from 'styled-components';

const WriteDiary = () => {
  // 백으로 부터
  return (
    <Container>
      <Day>2023년 2월 14일</Day>
      <h1
        style={{ marginLeft: '16px', marginTop: '12px', marginBottom: '15px' }}
      >
        이번달 체크리스트
      </h1>
      <div
        style={{
          width: '100%',
          height: '500px',
          border: '1px solid black',
          margin: '0 auto',
        }}
      ></div>
      <Container2>
        <Area>
          <h1>오늘의 점수</h1>
        </Area>
        <Area>
          <h1>오늘의 일지</h1>
        </Area>
      </Container2>
    </Container>
  );
};

export default WriteDiary;

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
