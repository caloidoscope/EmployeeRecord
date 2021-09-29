import Container from '@mui/material/Container';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateModal from './CreateModal';
import DeleteModal from './DeleteModal';
import EmployeeGrid from './EmployeeGrid';
import Header from './Header';
import UpdateModal from './UpdateModal';

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {action} = this.props.currentEmployee
        return (
            <Container>
                <Header />
                <EmployeeGrid />
                {action == "Edit" && <UpdateModal />}
                {action == "Add" && <CreateModal />}
                {action == "Delete" && <DeleteModal />}
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    const { currentEmployee } = state
    return {
        currentEmployee
    }
}

export default connect(mapStateToProps)(MainContainer);