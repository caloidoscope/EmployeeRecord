import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import withStyles from '@mui/styles/withStyles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add'
const useStyles = theme => ({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    }
});

class EmployeeGrid extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllEmployees()
    }

    onClickEdit = (employee) => {
        this.props.openUpdateModal(employee)
    }

    onClickAdd = () => {
        this.props.openCreateModal()
    }

    onClickDelete = (employee) => {
        // console.log(currentEmployee)
        this.props.openDeleteModal(employee)
    }

    render() {
        const { classes, employees } = this.props
        return (
            <Container maxWidth="md" className={classes.root}>
                <Grid container alignItems="center">
                    <Grid md="1">

                    </Grid>
                    <TableContainer >
                        <Table fullWidth>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        ID
                                    </TableCell>
                                    <TableCell align="right">
                                        First Name
                                    </TableCell>
                                    <TableCell align="right">
                                        Middle Name
                                    </TableCell>
                                    <TableCell align="right">
                                        Last Name
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained"
                                            color="success" fullWidth
                                            onClick={this.onClickAdd}>
                                            <AddIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employees.map((employee) => (
                                    <TableRow key={employee.id}>
                                        <TableCell align="left" component="th" scope="row">
                                            {employee.Id}
                                        </TableCell>
                                        <TableCell align="right">{employee.FirstName}</TableCell>
                                        <TableCell align="right">{employee.MiddleName}</TableCell>
                                        <TableCell align="right">{employee.LastName}</TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
                                                <Button onClick={() => this.onClickEdit(employee)}>
                                                    <EditIcon />
                                                </Button>
                                                <Button onClick={() => this.onClickDelete(employee)} color="error" >
                                                    <DeleteIcon />
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    const { employees } = state
    return {
        employees
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllEmployees: () => actionTypes.getAllEmployees(dispatch),
        openUpdateModal: (employee) => dispatch(actionTypes.openUpdateModal(employee)),
        openCreateModal: () => dispatch(actionTypes.openCreateModal()),
        openDeleteModal: (employee) => dispatch(actionTypes.openDeleteModal(employee)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(EmployeeGrid));