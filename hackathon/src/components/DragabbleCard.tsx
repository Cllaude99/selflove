import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';
import { ReactComponent as Delete } from '../assets/imgs/delete.svg';

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
const DragabbleCard = ({ toDoId, index, toDoText }: IDragabbleCardProps) => {
  const handleDelete = () => {};
  return (
    <Draggable draggableId={toDoId + ''} index={index} key={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDoText}
          <Delete onClick={handleDelete} />
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? '#74b9ff' : props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? '0px 2px 5px rgba(0,0,0,0.5)' : 'none'};
  position: relative;
  svg {
    position: absolute;
    right: 0;
  }
`;
