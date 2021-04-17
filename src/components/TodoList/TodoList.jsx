import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import { ToDoListDarkTheme } from '../Themes/ToDoListDarkTheme';
import { Container } from './components/Container';
import { Dropdown } from './components/Dropdown';
import { Heading3 } from './components/Heading';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { Table, Thead, Tr, Th } from './components/Table';


export default class TodoList extends Component {
    render() {
        return (
            <ThemeProvider theme={ToDoListDarkTheme}>
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
                            <Tr>
                                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i className="fa fa-edit"></i></Button>
                                    <Button className="ml-1"><i className="fa fa-check"></i></Button>
                                    <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                                </Th>
                            </Tr>
                            <Tr>
                                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i className="fa fa-edit"></i></Button>
                                    <Button className="ml-1"><i className="fa fa-check"></i></Button>
                                    <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                                </Th>
                            </Tr>
                        </Thead>
                    </Table>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                                <Th className="text-right">
                                    <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                                </Th>
                            </Tr>
                            <Tr>
                                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                                <Th className="text-right">

                                    <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                                </Th>
                            </Tr>
                        </Thead>
                    </Table>
                </Container>

            </ThemeProvider>
        )
    }
}
