import React from 'react';
import { connect } from 'react-redux';

import { switchPage } from '../actions/NavBarActions';
import { NavBar } from '../components/NavBar';

class NavBarContainer extends React.Component {
    render() {
        return(
            <NavBar
                switchPage={this.props.switchPage}
                activePage={this.props.navigate.activePage}
            />
        );
    }
}

const mapStateToProps = store => {
    return {
        navigate: store.navigate,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        switchPage: container => dispatch(switchPage(container)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
