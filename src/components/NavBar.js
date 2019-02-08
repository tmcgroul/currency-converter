import React from 'react';

import CollectionPageContainer from '../containers/CollectionPageContainer';
import ConverterPageContainer from '../containers/ConverterPageContainer';

const COMPONENTS = {
    [CollectionPageContainer]: 'currency',
    [ConverterPageContainer]: 'converter',
};

export class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" id="currency" href="#currency" onClick={this._onBtnClick}>Текущие курсы валют</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="converter" href="#converter" onClick={this._onBtnClick}>Конвертер валюты</a>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this._manageActive();
    }

    componentDidUpdate() {
        this._manageActive();
    }

    _onBtnClick = (e) => {
        this._deactivateLastTab();

        if (e.currentTarget.id == 'converter') {
            this.props.switchPage(ConverterPageContainer);
        } else {
            this.props.switchPage(CollectionPageContainer);
        }
    }

    /** Remove class ``active`` from last active tab */
    _deactivateLastTab = () => {
        const activeElem = document.querySelector('.nav .active');
        const { className } = activeElem;
        activeElem.className = className.replace(' active', '');
    }

    _manageActive = () => {
        const id = COMPONENTS[this.props.activePage];
        const elem = document.getElementById(id);
        elem.className += ' active';
    }
}
