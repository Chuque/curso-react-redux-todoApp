import React, {Component} from 'react'
import Axios from 'axios'

import {DatePicker, Row, Col} from 'antd'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/todos'

export default class Todo extends Component{
    constructor(){
        super()
        this.state = {description: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        const description = this.state.description;
        console.log('descrição: ' + description)
        Axios.post(URL, {description})
            .then(resp => console.log(resp.data))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm onClick={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        )
    }
}
