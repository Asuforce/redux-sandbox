import * as PropTypes from 'prop-types';
import * as React from 'react';

const Todo = ({
  onClick,
  completed,
  text,
}: {
  onClick: any;
  completed: boolean;
  text: string;
}) => (
  <li
    onClick={onClick}
    role="list"
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
