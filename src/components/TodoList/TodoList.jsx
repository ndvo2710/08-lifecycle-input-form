import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import { Container } from './components/Container';
import { Dropdown } from './components/Dropdown';
import { Heading3 } from './components/Heading';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { Table, Thead, Tr, Th } from './components/Table';
import { connect } from 'react-redux';


class TodoList extends Component {
    renderToDoTask = () => {
        const { taskList } = this.props;
        const toDoTaskList = taskList.filter(task => !task.isCompleted);
        return toDoTaskList.map((todoTask, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: 'middle' }}>{todoTask.taskName}</Th>
                    <Th className="text-right">
                        <Button className="ml-1"><i className="fa fa-edit"></i></Button>
                        <Button className="ml-1"><i className="fa fa-check"></i></Button>
                        <Button className="ml-1"><i className="fa fa-trash"></i></Button>

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
                        <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                    </Th>
                </Tr>
            )
        })
    }

    render() {
        const { theme } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container className="w-50">
                    <Dropdown>
                        <option>Dark Theme</option>
                        <option>Light Theme</option>
                        <option>Primary Theme</option>
                    </Dropdown>
                    <Heading3>To do List</Heading3>
                    <TextField label="Task name" className="w-50" />
                    <Button className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);