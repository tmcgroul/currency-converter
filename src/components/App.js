import React from 'react';
import { connect } from 'react-redux';

import NavBarContainer from '../containers/NavBarContainer';

export class App extends React.Component {
    render() {
        const page = this.props.navigate.activePage;
        return (
            <React.Fragment>
                <NavBarContainer />
                {React.createElement(page, { currencies: this.props.collection.currencies })}
            </React.Fragment>
        );
    }
}

const mapStateToProps = store => {
    return store;
}

export default connect(mapStateToProps)(App);
