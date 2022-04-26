import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../JS/actions/todoactions';
import TodoEdit from './TodoEdit';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();


    return (
        
            <ListGroup>
                {todos.map(todo => (
                <ListGroup.Item 
                key={todo.id}
                style={{ display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent:"space-between",
                flexDirection:'row-reverse'
                }}>
                <div
                    style={{
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-around', 
                        width: '30%'
                    }}>
                    <Button
                        variant="outline-secondary"
                        onClick={() => dispatch(completeTodo(todo.id))}
                    >
                        {todo.completed ? '✅' : '❌'}
                    </Button>
                    <TodoEdit todo={todo} />
                    <Button
                        variant="outline-danger"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                        Delete
                    </Button>
                </div>
                <p
                    style={{
                        margin: '0', 
                        textDecoration: todo.completed ? 'line-through' : 'none'}}
                >
                    {todo.text}
                </p>
                </ListGroup.Item>))}
            </ListGroup>     
        
    )
}
export default TodoList;