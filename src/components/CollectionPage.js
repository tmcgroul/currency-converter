import React from 'react'

class CollectionItem extends React.Component {
    state = {
        isHover: false,
    }

    render() {
        const { CharCode, Name, Nominal, Previous, Value, isFavourite } = this.props.item;
        const dynamic = Previous > Value ? 'fall' : 'grow';
        const iconClass = this.state.isHover || isFavourite ? 'icon-star-full' : 'icon-star-empty';

        return (
            <div className="collection-item">
                <i
                    className={iconClass}
                    onMouseOver={this._onMouseOver}
                    onMouseOut={this._onMouseOut}
                    onClick={this._onIconClick}>
                </i>
                <div className="collection-item__container">
                    <div className="char-code">{CharCode}</div>
                    <div className="name text-nowrap center">
                        <span title={Name}>{Name}</span>
                    </div>
                    <div className="nominal center">
                        <span>Номинал: {Nominal}</span>
                    </div>
                    <div className={`values center ${dynamic}`}>
                        <span>{Previous} => {Value}</span>
                    </div>
                </div>
            </div>
        )
    }

    _onMouseOver = () => {
        this.setState({ isHover: true });
    }

    _onMouseOut = () => {
        this.setState({ isHover: false });
    }

    _onIconClick = () => {
        this.props.manageFavourites(this.props.item);
    }
}

class Collection extends React.Component {
    render() {
        return this.props.collection.map(item => {
            return (
                <CollectionItem key={item.ID} item={item} manageFavourites={this.props.manageFavourites}/>
            )
        });
    }
}

export class CollectionPage extends React.Component {
    render() {
        if (this.props.isFetching) {
            return (
                <p>Загрузка ...</p>
            )
        } else {
            const sorted = this._sortCurrency();
            return (
                <div className="collection-page">
                    <Collection collection={sorted} manageFavourites={this.props.manageFavourites}/>
                </div>
            );
        }
    }

    componentDidMount() {
        if (!this.props.currencies.length || this.props.isFetching) {
            this.props.getCurrency();
        }
    }

    _sortCurrency = () => {
        const byName = this.props.currencies.sort((previous, current) => {
            if (previous.Name > current.Name) {
                return 1;
            }
            
            if (previous.Name < current.Name) {
                return -1;
            }

            return 0;
        });

        return byName.sort((current, previous) => {
            if (previous.isFavourite && current.isFavourite) {
                return 0;
            }

            if (previous.isFavourite) {
                return 1;
            }

            return -1;
        });
    }
}
