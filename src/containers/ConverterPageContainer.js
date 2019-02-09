import React from 'react';

import ConverterPage from '../components/ConverterPage';

export default class ConverterPageContainer extends React.Component {
    render() {
        return (
            <ConverterPage currencies={this.props.currencies} />
        );
    }
}
