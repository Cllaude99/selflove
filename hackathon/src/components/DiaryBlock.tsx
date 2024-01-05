import React, { useCallback } from 'react';
import { IDiary } from '../pages/Home';
import { styled } from 'styled-components';

interface Props {
  diary: IDiary;
}

const DiaryBlock = ({ diary }: Props) => {
  const onClickDiary = useCallback(() => {
    console.log(diary.id, 'click');
  }, []);

  return (
    <DiaryContainer onClick={onClickDiary}>
      <p>{diary.title}</p>
      <p>
        {diary.createdAt.getFullYear()}.{diary.createdAt.getMonth() + 1}.
        {diary.createdAt.getDate()}
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
