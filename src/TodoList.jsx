import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component{
	render(){
		return( 
			<ul>
			<TodoListItem name="item1"/>
			<TodoListItem name="item2"/>
			</ul>
			);
	}
}

