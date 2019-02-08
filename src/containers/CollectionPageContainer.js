import React from 'react';
import { connect } from 'react-redux';

import { CollectionPage } from '../components/CollectionPage';
import { getCurrency, manageFavourites } from '../actions/CollectionActions';

class CollectionPageContainer extends React.Component {
    render() {
        const { isFetching, currencies } = this.props.collection;
        return (
            <CollectionPage
                getCurrency={this.props.getCurrency}
                manageFavourites={this.props.manageFavourites}
                isFetching={isFetching}
                currencies={currencies}
            />
        );
    }
}

const mapStateToProps = store => {
    return {
        collection: store.collection,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCurrency: () => dispatch(getCurrency()),
        manageFavourites: (currency) => dispatch(manageFavourites(currency)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPageContainer);
