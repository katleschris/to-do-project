import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface TodoItem {
  id: number;
  label: string;
  completed: boolean;
}

interface TodoListProps {
  items: TodoItem[];
  onItemToggle: (id: number) => void;
  onItemLabelChange: (id: number, label: string) => void;
  onItemClick: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  onItemToggle,
  onItemLabelChange,
  onItemClick,
}) => {
  const handleToggle = (id: number) => {
    onItemToggle(id);
  };

  const handleLabelChange = (id: number, label: string) => {
    onItemLabelChange(id, label);
  };

  const handleClick = (id: number) => {
    onItemClick(id);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: '8px' }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleClick(item.id)}
          >
            <Checkbox
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <TextField
              value={item.label}
              onChange={(e) => handleLabelChange(item.id, e.target.value)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <IconButton onClick={() => handleClick(item.id)}>
              <ArrowForwardIcon />
            </IconButton>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
