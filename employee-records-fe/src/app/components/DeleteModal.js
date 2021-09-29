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

class DeleteModal extends Component {
    constructor(props) {
        super(props)
    }

    handleClose = () => {
        this.props.unsetCurrentEmployee()
    }

    handleSubmit = () => {
        const {currentEmployee, deleteEmployee} = this.props
        deleteEmployee(currentEmployee.Id)
    }

    render() {
        const { currentEmployee, classes } = this.props
        const {FirstName, MiddleName, LastName} = currentEmployee
        return (
            <div>
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open
                    onClose={this.handleClose}
                    BackdropComponent={Backdrop}
                >
                    <Box component="form" sx={style}>
                        <h2 id="unstyled-modal-title">Delete Employee</h2>
                        <p id="unstyled-modal-description">Are you sure you want to delete {FirstName} {MiddleName} {LastName}?</p>
                        <Grid className={classes.grid} item md={12}>
                            <Button variant="contained" color="primary"
                                onClick={this.handleSubmit}
                                fullWidth>
                                Yes
                            </Button>
                        </Grid>
                        <Grid className={classes.grid} item md={12}>
                            <Button variant="contained" color="error"
                                onClick={this.handleClose}
                                fullWidth>
                                No
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
        deleteEmployee: (id) => actionTypes.deleteEmployee(dispatch, id),
        unsetCurrentEmployee: () => dispatch(actionTypes.unsetCurrentEmployee())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(DeleteModal));