import styled from '@emotion/styled';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import withStyles from '@mui/styles/withStyles';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};

const useStyles = theme => ({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    grid: {
        padding: 8
    },
    textField:{
        margin: 8
    }
});

class UpdateModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newFirstName: "",
            newMiddleName: "",
            newLastName: ""
        }
    }

    componentDidMount () {
        const {FirstName, MiddleName, LastName} = this.props.currentEmployee
        this.setState({
            newFirstName: FirstName,
            newMiddleName: MiddleName,
            newLastName: LastName
        })
    }

    handleOnFirstNameChange = (event) => {
        this.setState({newFirstName: event.target.value})
    }

    handleOnMiddleNameChange = (event) => {
        this.setState({newMiddleName: event.target.value})
    }

    handleOnLastNameChange = (event) => {
        this.setState({newLastName: event.target.value})
    }

    handleClose = () => {
        this.props.unsetCurrentEmployee()
    }

    handleSubmit = () => {
        const {newFirstName, newMiddleName, newLastName} = this.state
        const {currentEmployee, updateEmployee} = this.props
        updateEmployee({
            Id: currentEmployee.Id,
            FirstName: newFirstName,
            MiddleName: newMiddleName,
            LastName: newLastName
        })
    }

    render() {
        const { currentEmployee, classes } = this.props
        const {FirstName, MiddleName, LastName} = currentEmployee
        const {newFirstName: newFirstName, newMiddleName, newLastName} = this.state
        const isFirstNameEmpty = newFirstName == "" 
        const isMiddleNameEmpty = newMiddleName == "" 
        const isLastNameEmpty = newLastName == ""
        const disabled = isFirstNameEmpty || isMiddleNameEmpty || isLastNameEmpty || 
            (newFirstName === FirstName && newMiddleName === MiddleName && newLastName === LastName)
        return (
            <div>
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    open
                    onClose={this.handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box component="form" sx={style}>
                        <h2 id="unstyled-modal-title">Update Employee</h2>
                        <Grid item md={12}>
                            <TextField className={classes.textField} id="first-name" fullWidth
                                label="First Name"
                                error={isFirstNameEmpty}
                                variant="outlined"
                                onChange={this.handleOnFirstNameChange}
                                defaultValue={FirstName}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <TextField className={classes.textField}  id="middle-name" fullWidth
                                label="Middle Name"
                                error={isMiddleNameEmpty}
                                variant="outlined"
                                onChange={this.handleOnMiddleNameChange}
                                defaultValue={MiddleName}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <TextField className={classes.textField} id="last-name" fullWidth
                                label="Last Name"
                                error={isLastNameEmpty}
                                variant="outlined"
                                onChange={this.handleOnLastNameChange}
                                defaultValue={LastName}
                            />
                        </Grid>
                        <Grid className={classes.grid} item md={12}>
                            <Button variant="contained" color="primary"
                                onClick={this.handleSubmit}
                                fullWidth
                                disabled={disabled}>
                                Update
                            </Button>
                        </Grid>
                        <Grid className={classes.grid} item md={12}>
                            <Button variant="contained" color="error"
                                onClick={this.handleClose}
                                fullWidth>
                                Cancel
                            </Button>
                        </Grid>
                    </Box>
                </StyledModal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { currentEmployee } = state
    return {
        currentEmployee
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateEmployee: (employee) => actionTypes.updateEmployee(dispatch, employee),
        unsetCurrentEmployee: () => dispatch(actionTypes.unsetCurrentEmployee())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(UpdateModal));