import React, { useCallback } from 'react';
import { IDiary } from '../pages/Home';
import { styled } from 'styled-components';

interface Props {
  diary: IDiary;
}

const DiaryBlock = ({ diary }: Props) => {
  const date = new Date(diary.createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth()는 0부터 시작하기 때문에 +1
  const day = String(date.getDate()).padStart(2, '0');
  const onClickDiary = useCallback(() => {
    console.log(diary.did, 'click');
  }, []);

  return (
    <DiaryContainer onClick={onClickDiary}>
      <p>{diary.title}</p>
      <p>
        {year}.{month}.{day}
      </p>
    </DiaryContainer>
  );
};

export default DiaryBlock;

const DiaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ababab;
  cursor: pointer;

  > p {
    color: #262626;
    font-family: Nanum Gothic;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 8px 0 12px;
  }
`;
