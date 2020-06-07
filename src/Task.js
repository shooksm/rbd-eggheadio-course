import React from 'react';
import styled from 'styled-components/macro';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {task.content}
      </Container>
    )}
  </Draggable>
);

export default Task;