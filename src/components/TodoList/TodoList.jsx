import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import { Container } from './components/Container';
import { Dropdown } from './components/Dropdown';
import { Heading3 } from './components/Heading';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { Table, Thead, Tr, Th } from './components/Table';
import { connect } from 'react-redux';
import { addTaskAction, changeThemeAction, deleteTask, editTask, markTaskAsCompleted } from '../../redux/actions/toDoListActions';
import { arrTheme } from '../Themes/ThemeManager';


class TodoList extends Component {
    state = {
        taskName: ''
    }

    renderToDoTask = () => {
        const { taskList } = this.props;
        const toDoTaskList = taskList.filter(task => !task.isCompleted);
        return toDoTaskList.map((todoTask, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: 'middle' }}>{todoTask.taskName}</Th>
                    <Th className="text-right">
                        {/* Edit Task Button  */}
                        <Button onClick={() => {
                            this.props.dispatch(editTask(todoTask));
                        }} className="ml-1"><i className="fa fa-edit"></i></Button>
                        {/* Mark Task Complete Button */}
                        <Button onClick={() => {
                            this.props.dispatch(markTaskAsCompleted(todoTask.id))
                        }} className="ml-1"><i className="fa fa-check"></i></Button>
                        {/* Delete Task Button  */}
                        <Button onClick={() => {
                            this.props.dispatch(deleteTask(todoTask.id))
                        }} className="ml-1"><i className="fa fa-trash"></i></Button>

                    </Th>
                </Tr>
            )
        })
    }

    renderCompletedTask = () => {
        const { taskList } = this.props;
        const completedTaskList = taskList.filter(task => task.isCompleted);
        return completedTaskList.map((completedTask, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: 'middle' }}>{completedTask.taskName}</Th>
                    <Th className="text-right">
                        {/* Delete Task Button  */}
                        <Button onClick={() => {
                            this.props.dispatch(deleteTask(completedTask.id))
                        }} className="ml-1"><i className="fa fa-trash"></i></Button>

                    </Th>
                </Tr>
            )
        })
    }

    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    handleAddTask = () => {
        console.log('handleAddTask');
        let { taskName } = this.state;
        // Create a task object
        let newTask = {
            id: Date.now(),
            taskName: taskName,
            isCompleted: false
        }
        console.log(newTask)

        // Push task obect to redux via dispatch methoc
        this.props.dispatch(addTaskAction(newTask))

    }

    render() {
        const { theme, taskEdit } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container className="w-50">
                    <Dropdown onChange={(e) => {
                        console.log('changeTheme');
                        console.log('value', e.target.value);
                        this.props.dispatch(changeThemeAction(e.target.value));
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do List</Heading3>
                    <TextField value={taskEdit.taskName} label="Task name" className="w-50" onChange={(e) => {
                        this.setState({
                            taskName: e.target.value
                        })
                    }} />
                    <Button onClick={this.handleAddTask} className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
                    <Button className="ml-2"><i className="fa fa-refresh "></i> Update task</Button>
                    <hr />
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderToDoTask()}
                        </Thead>
                    </Table>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderCompletedTask()}
                        </Thead>
                    </Table>
                </Container>

            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.toDoListReducer
})

export default connect(mapStateToProps)(TodoList);